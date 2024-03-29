const { Schema } = require("@protagonists/coerce");
const { BooleanType, StringType } = require("@protagonists/coerce-basics");
const fs = require("fs");

const Options = new Schema({
  get: BooleanType,
  file: StringType,
  style: BooleanType,
  timestamp: BooleanType,
  showName: BooleanType,
  name: StringType,
  log: BooleanType,
  warn: BooleanType,
  crit: BooleanType,
  error: BooleanType,
  debug: BooleanType
});

Options.setDefaults({
  get: false,
  file: "empty",
  style: true,
  timestamp: false,
  showName: true,
  log: true,
  warn: true,
  crit: true,
  error: true,
  debug: true
});

module.exports = Options;
