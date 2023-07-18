import { generateRandomString } from './lib/IdGenerator'

type logLevel = 'info' | 'debug' | 'error'

type logProperties = Partial<{
    /**
     * The date of the log in iso string
     */
    withDate: boolean,
    /**
     * Randomly generated id as string for the log
     */
    withId: boolean,
    /**
     * Just a log note
     */
    note: string
}>

function log(level: logLevel, message: string, logProps?: logProperties) {
    process.stdout.write(`${level}: ${message} \n`);
    if (logProps) {
        if (logProps.withId) {
            process.stdout.write(`logId: ${generateRandomString()} \n`);
        }
        if (logProps.withDate) {
            process.stdout.write(`logDate: ${new Date().toISOString()} \n`);
        }
        if (logProps.note) {
            process.stdout.write(`logNote: ${logProps.note} \n`);
        }
    }
}

function debug(message: string, logProps?: logProperties) {
    log('debug', message, logProps);
}

function info(message: string, logProps?: logProperties) {
    log('info', message, logProps);
}

function error(message: string, logProps?: logProperties) {
    log('error', message, logProps);
}

export {
    debug,
    info,
    error
}
