const { Logger } = require("./logger");
const logger = new Logger();

logger.defaults.log.overridable = true;
logger.setDefault("log", logger.debug);

logger.log("test");
logger.log("test");
logger.log("test");
logger.log("test");
logger.log("test");
