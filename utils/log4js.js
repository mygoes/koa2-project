/**
 * 日志存储
 */
const log4js = require('log4js')

// 日志的 8 个级别
const levels = {
    'all': log4js.levels.ALL, // 最低等级的，用于打开所有日志记录
    'trace': log4js.levels.TRACE, // 很低等级的，一般不会使用

    'debug': log4js.levels.DEBUG, // 可随意使用于任何调试
    'info': log4js.levels.INFO, // 打印系统的正常状态信息，便于追踪定位

    /* 系统运行时检测到了一个不正常的状态 */
    'warn': log4js.levels.WARN, // 警告。表明系统出现轻微的不合理但不影响运行和使用
    'error': log4js.levels.ERROR, // 错误。指出虽然发生错误事件，但仍然不影响系统的继续运行
    'fatal': log4js.levels.FATAL, // 严重错误。将会导致应用程序的退出

    'off': log4js.levels.OFF, // 最高等级的，用于关闭所有日志记录
}

log4js.configure({
    appenders: {
        console: { type: 'console' },
        info: {
            type: 'file',
            filename: 'logs/all-logs.log'
        },
        error: {
            type: 'dateFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true// 设置文件名称为 filename + pattern
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'debug' },
        info: {
            appenders: ['info', 'console'],
            level: 'info'
        },
        error: {
            appenders: ['error', 'console'],
            level: 'error'
        }
    }
})

/**
 * 日志输出，level为debug
 * @param {string} content 
 */
exports.debug = (content) => {
    let logger = log4js.getLogger();
    logger.level = levels.debug;
    logger.debug(content);
}

/**
 * 日志输出，level为info
 * @param {string} content 
 */
exports.info = (content) => {
    let logger = log4js.getLogger('info');
    logger.level = levels.info;
    logger.info(content);
}

/**
 * 日志输出，level为error
 * @param {string} content 
 */
exports.error = (content) => {
    let logger = log4js.getLogger('error');
    logger.level = levels.error;
    logger.error(content);
}