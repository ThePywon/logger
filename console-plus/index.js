function onlog(log, ...args) {
  var finalArgs = [];
  args.forEach(arg=>{
    finalArgs.push(stringify(arg));
  });
  return log.apply(this, finalArgs);
}

function stringify(arg, nest = 0) {
  if(arg === undefined)
    return "\x1b[2;3;37mundefined\x1b[0m";
  else if(typeof arg === "object") {
    var stringNest = [];
    for(let i = 0; i < nest; i++)
      stringNest.push("\t");
    stringNest = stringNest.join('');
    var stringArg = `${arg.constructor.name || "Object"} {\n`;
    Object.getOwnPropertyNames(arg).forEach(prop=>{
      let desc = Object.getOwnPropertyDescriptor(arg, prop);
      stringArg += `\t${stringNest}${!desc.enumerable ? "\x1b[2;3;37m" : ""}${desc.get && !desc.set ? "\x1b[4m" : ""}${!desc.get && desc.set ? "\x1b[2;35m" : ""}${prop}\x1b[0m: ${stringify(arg[prop], nest+1)}\n`;
    });
    stringArg += `${stringNest}}`;
    return stringArg;
  }
  else if(typeof arg === "function") {
    return `\x1b[36m[Function: ${arg.name || arg.constructor.name}]\x1b[0m`;
  }
  else if(typeof arg === "string")
    return `\x1b[32m"${arg.toString()}"\x1b[0m`;
  else if(typeof arg === "number" || typeof arg === "boolean")
    return `\x1b[33m${arg}\x1b[0m`
  else if(typeof arg === "symbol")
    return `\x1b[31m${arg.toString()}\x1b[0m`;
  else return arg.toString();
}

(()=>{
  var FunctionPrototype = Function.prototype;
  var originalFunc = FunctionPrototype.toString;
  var namePattern = originalFunc.apply(originalFunc).split(originalFunc.name);
  var overwritenFuncs = [];
  var overwritenFuncsNames = [];
  var overwrite = function(originalFunction, overridenToStr){
    overwritenFuncs.push(originalFunction);
    overwritenFuncsNames.push(overridenToStr);
    return originalFunction;
  };

  FunctionPrototype.toString = (function(h){
    return overwrite(function toString(){
        var i = overwritenFuncs.indexOf(this);
        return i != -1 ? overwritenFuncsNames[i] || namePattern.join(this.name) : h.apply(this);
      });
    })(originalFunc);

  console.log = (function(originalConsoleLog){
    return overwrite(function log(){
      var b = [], i;
      for(i in arguments) b.push(arguments[i]);
      return onlog(originalConsoleLog, ...b);
    });
  })(console.log);
})();
