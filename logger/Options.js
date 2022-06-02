const { Schema, SchemaTypes } = require("@protagonists/coerce");
const fs = require("fs");

class Filename extends SchemaTypes._String_ {
  static Empty = Symbol("Empty");

  constructor() { super() }

  call(val) {
    if(val === Filename.Empty) return val;

    val = super.call(val);

    try {
      if(val === undefined || !fs.existsSync(val)) return undefined;
    } catch(e) { return undefined }

    return val;
  }
}
Object.defineProperty(Filename.prototype, "toString", {
  value: function toString() { return "Filename"; },
  configurable: true
});

const Options = new Schema({
  file: Filename,
  style: Boolean,
  timestamp: Boolean,
  name: Boolean,
  log: Boolean,
  warn: Boolean,
  crit: Boolean,
  error: Boolean,
  debug: Boolean
});

Options.setDefaults({
  file: Filename.Empty,
  style: true,
  timestamp: false,
  name: true,
  log: true,
  warn: true,
  crit: true,
  error: true,
  debug: true
});

module.exports = { Options, Filename };
