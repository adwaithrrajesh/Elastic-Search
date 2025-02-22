import { pinoHttp } from "pino-http";
import pino from "pino";

export const logger = pino({
    level: "info",
    base: {
        serviceName: "Elastic-Search",
    },
    serializers: pino.stdSerializers,
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
        },
    },
});

export const httpLogger = pinoHttp({
    level: "error",
    logger,
});
