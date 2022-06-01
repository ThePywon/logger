const Color = {};

// Simplify property creation
function builder(name, color) {
  Color[name] = (text) => {return `\x1b${color}${text}\x1b[0m`};
  Object.defineProperty(Color[name], "name", {value:name});
}

// Create all the properties
builder("black", "[30m");
builder("red", "[31m");
builder("green", "[32m");
builder("yellow", "[33m");
builder("blue", "[34m");
builder("magenta", "[35m");
builder("cyan", "[36m");
builder("white", "[37m");
builder("darkred", "[2;31m");
builder("darkgreen", "[2;32m");
builder("darkyellow", "[2;33m");
builder("darkblue", "[2;34m");
builder("darkmagenta", "[2;35m");
builder("darkcyan", "[2;36m");
builder("gray", "[2;37m");
builder("grey", "[2;37m");
builder("blackBg", "[40m");
builder("redBg", "[41m");
builder("greenBg", "[42m");
builder("yellowBg", "[43m");
builder("blueBg", "[44m");
builder("magentaBg", "[45m");
builder("cyanBg", "[46m");
builder("whiteBg", "[47m");
builder("bold", "[1m");
builder("dark", "[2m");
builder("italic", "[3m");
builder("underline", "[4m");
builder("invert", "[7m");
builder("hide", "[8m");
builder("cross", "[9m");

Object.freeze(Color);

module.exports = Color;
