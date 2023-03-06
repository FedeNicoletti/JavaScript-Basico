const logger = require('./logger')

logger.info("Hola soy un mensaje de info");
logger.warn("Hola soy un mensaje de warn");
logger.error("Hola soy un mensaje de error");

try {

} catch (error) {
    logger.error("Hola soy un mensaje de error");
}