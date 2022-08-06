const { Schema, SchemaTypes } = require("@protagonists/coerce");
const fs = require("fs");

const Options = new Schema({
  get: Boolean,
  file: String,
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
  get: false,
  file: "empty",
  style: true,
  timestamp: false,
  name: true,
  log: true,
  warn: true,
  crit: true,
  error: true,
  debug: true
});

module.exports = Options;
