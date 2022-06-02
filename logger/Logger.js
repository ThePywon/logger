"use strict";

// Imports
const fs = require("fs");
const Emitter = require("@protagonists/emitter");
const Color = require("./Color");
const { Options, Filename } = require("./Options");

function Logger(options) {
  // Convert & validate all properties
  options = Options(options || {});

  // Set this instance as an "emitter"
  Emitter.setEmitter(this);

  // Clear the file's inner text
  if(options.file !== Filename.Empty)
    fs.writeFile(options.file, '', err => {
      if(err) throw new Error(err);
    });

  const styleEnabled = () => {
    return options.file === Filename.Empty && options.style;
  }

  const getTimestamp = () => {
    const date = new Date();
    return date.getUTCHours().toString().padStart(2, '0') + ':' +
      date.getUTCMinutes().toString().padStart(2, '0') + ':' +
      date.getUTCSeconds().toString().padStart(2, '0') + '.' +
      date.getUTCMilliseconds().toString().padStart(3, '0');
  }

  // As you guessed it, this handles display name
  Object.defineProperty(this, "displayName", {
    enumerable: true,
    get: () => {
      return styleEnabled() && this.constructor.name ? Color.blackBg(this.constructor.name) : this.constructor.name;
    }
  });
  

  Object.defineProperties(this, {
    log:{
      enumerable:true,
      value:(...args) => {
        this.emit("log", ...args);
        return this;
      },
      writable:false
    },
    warn:{
      enumerable:true,
      value:(...args) => {
        this.emit("warn", ...args);
        return this;
      },
      writable:false
    },
    crit:{
      enumerable:true,
      value:(...args) => {
        this.emit("crit", ...args);
        return this;
      },
      writable:false
    },
    error:{
      enumerable:true,
      value:(...args) => {
        this.emit("error", ...args);
        return this;
      },
      writable:false
    },
    debug:{
      enumerable:true,
      value:(...args) => {
        this.emit("debug", ...args);
        return this;
      },
      writable:false
    }
  });

  
  this.setDefault("log", (...args) => {
    const result = [];

    // Display timestamp if enabled
    if(options.timestamp)
      result.push(!styleEnabled() ? getTimestamp() :
        Color.dark(Color.italic(getTimestamp())));

    // Display name if enabled
    if(options.name && this.displayName)
      result.push(this.displayName + ':');

    // Stringify each passed element
    for(let i = 0; i < args.length; i++)
      result.push(stringify(args[i], 0, styleEnabled()));

    // Output everything
    if(options.file !== Filename.Empty)
      fs.appendFileSync(options.file, result.join(' ')+'\n', err => {
        if(err) throw new Error(err);
      });
    else
      process.stdout.write(result.join(' ')+'\n');
  });
  // Disable the behaviour if intended
  if(!options.log) this.disableDefault("log");

  
  this.setDefault("warn", (...args) => {
    const result = [];

    // Display timestamp if enabled
    if(options.timestamp)
      result.push(!styleEnabled() ? getTimestamp() :
        Color.dark(Color.italic(getTimestamp())));
    
    // Display name if enabled
    if(options.name && this.displayName)
      result.push(this.displayName + (!styleEnabled() ? " WARN:" : ' '+Color.black(Color.yellowBg("WARN"))+':'));
    else 
      result.push(!styleEnabled() ? "WARN:" : Color.black(Color.yellowBg("WARN"))+':');

    // Stringify each passed element
    for(let i = 0; i < args.length; i++)
      result.push(stringify(args[i], 0, styleEnabled()));

    // Output everything
    if(options.file !== Filename.Empty)
      fs.appendFileSync(options.file, result.join(' ')+'\n', err=>{
        if(err) throw new Error(err);
      });
    else
      process.stdout.write(result.join(' ')+'\n');
  });
  // Disable the behaviour if intended
  if(!options.warn)
    this.disableDefault("warn");

  
  this.setDefault("crit", (...args) => {
    const result = [];

    // Display timestamp if enabled
    if(options.timestamp)
      result.push(!styleEnabled() ? getTimestamp() :
        Color.dark(Color.italic(getTimestamp())));

    // Display name if enabled
    if(options.name && this.displayName)
      result.push(this.displayName + (!styleEnabled() ? " CRIT:" : ' '+Color.black(Color.redBg("CRIT"))+':'));
    else 
      result.push(!styleEnabled() ? "CRIT:" : Color.black(Color.redBg("CRIT"))+':');

    // Stringify each passed element
    for(let i = 0; i < args.length; i++)
      result.push(stringify(args[i], 0, styleEnabled()));

    // Output everything
    if(options.file !== Filename.Empty)
      fs.appendFileSync(options.file, result.join(' ')+'\n', err=>{
        if(err) throw new Error(err);
      });
    else
      process.stdout.write(result.join(' ')+'\n');
  });
  // Disable the behaviour if intended
  if(!options.crit)
    this.disableDefault("crit");


  this.setDefault("error", (...args) => {
    const result = [];

    // Display timestamp if enabled
    if(options.timestamp)
      result.push(!styleEnabled() ? getTimestamp() :
        Color.dark(Color.italic(getTimestamp())));

    // Display name if enabled
    if(options.name && this.displayName)
      result.push(this.displayName + (!styleEnabled() ? " ERROR:" : ' '+Color.black(Color.redBg("ERROR"))+':'));
    else 
      result.push(!styleEnabled() ? "ERROR:" : Color.black(Color.redBg("ERROR"))+':');

    // Stringify each passed element
    for(let i = 0; i < args.length; i++)
      result.push(stringify(args[i], 0, styleEnabled()));

    // Get the stack trace
    let obj = {};
    Error.captureStackTrace(obj, this.error);
    result.push(!styleEnabled() ? 
      "\n\n" + obj.stack.split('\n').slice(1).join('\n') : 
      "\n\n" + obj.stack.split('\n').slice(1).map(e => !e.includes("/home/") ? Color.dark(Color.italic(e)) : e).join('\n'));

    // Output everything
    if(options.file !== Filename.Empty)
      fs.appendFileSync(options.file, result.join(' ')+'\n', err=>{
        if(err) throw new Error(err);
      });
    else
      process.stdout.write(result.join(' ')+'\n');
  });
  // Disable the behaviour if intended
  if(!options.error)
    this.disableDefault("error");

  
  this.setDefault("debug", (...args) => {
    const result = [];

    // Display timestamp if enabled
    if(options.timestamp)
      result.push(!styleEnabled() ? getTimestamp() :
        Color.dark(Color.italic(getTimestamp())));

    // Display name if enabled
    if(options.name && this.displayName)
      result.push(this.displayName + (!styleEnabled() ? " DEBUG:" : ' '+Color.black(Color.cyanBg("DEBUG"))+':'));
    else 
      result.push(!styleEnabled() ? "DEBUG:" : Color.black(Color.cyanBg("DEBUG"))+':');

    // Stringify each passed element
    for(let i = 0; i < args.length; i++)
      result.push(stringify(args[i], 0, styleEnabled()));

    // Output everything
    if(options.file !== Filename.Empty)
      fs.appendFileSync(options.file, result.join(' ')+'\n', err=>{
        if(err) throw new Error(err);
      });
    else
      process.stdout.write(result.join(' ')+'\n');
  });
  // Disable the behaviour if intended
  if(!options.debug)
    this.disableDefault("debug");
}

function stringify(arg, nest = 0, style = true) {
  switch(typeof arg) {
    case "undefined":
      
      return style ? "\x1b[2;3;37mundefined\x1b[0m" : "undefined";
      
    case "object":
      
      if(arg === null) return style ? "\x1b[2;3;37mnull\x1b[0m" : "null";

      if(arg instanceof Date) return style ? Color.magenta(arg.toString()) : arg.toString();

      
      let stringNest = [];
      for(let i = 0; i < nest; i++)
        stringNest.push("  ");
      stringNest = stringNest.join('');

      
      if(nest < 5) {
        
        let stringArg = arg.constructor && arg.constructor.name !== "Object" ? arg.constructor.name + " {\n" : arg.name ? arg.name + " {\n" : "{\n";

        const props = Object.getOwnPropertyNames(arg);
        for(let i = 0; i < props.length; i++){
          let desc = Object.getOwnPropertyDescriptor(arg, props[i]);
          stringArg += style ? 
            `  ${stringNest}${!desc.enumerable ? "\x1b[2;3;37m" : ""}${desc.get && !desc.set ? "\x1b[4m" : ""}${!desc.get && desc.set ? "\x1b[2;35m" : ""}${props[i]}\x1b[0m: ${stringify(arg[props[i]], nest+1, style)}\n` : 
            `  ${stringNest}${props[i]}: ${stringify(arg[props[i]], nest+1, style)}\n`;
        }
        stringArg += `${stringNest}}`;
        
        return stringArg;
      }
        
      else return `[object ${arg.constructor ? arg.constructor.name : arg.name || "Object"}]`; 
      
    case "function":
      
      return style ? `\x1b[36m[Function: ${arg.name || 
arg.constructor && arg.constructor.name}]\x1b[0m` : `[Function: ${arg.name || arg.constructor && arg.constructor.name}]`;
      
    case "string":
      
      return nest === 0 ? arg.toString() : !style ? `'${arg.toString()}'` : `\x1b[32m'${arg.toString()}'\x1b[0m`;
      
    case "number":
    case "boolean":
      
      return style ? `\x1b[33m${arg}\x1b[0m` : arg;
      
    case "symbol":
      
      return style ? `\x1b[31m${arg.toString()}\x1b[0m` : arg.toString();
      
    default: return arg.toString();
  }
}

Logger.setLogger = Logger.call;
module.exports = Logger;
