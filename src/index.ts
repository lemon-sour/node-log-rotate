import { OptionInterface } from './interface/option-interface';
import transportFile from './transport-file';
import deleteLogFiles from './delete-log-files';

const APP_NAME: string = 'node-log-rotate';
// https://docs.npmjs.com/misc/scripts#packagejson-vars
const LOG_APP_NAME: string = process.env.npm_package_name || APP_NAME;

let logAppName: string = LOG_APP_NAME;
let logMaxSize: number = 5 * 1024 * 1024;

function setup(options: OptionInterface) {
  if (options.appName) {
    logAppName = options.appName;
  }

  if (options.maxSize) {
    logMaxSize = options.maxSize;
  }
}

function log(text: string): boolean {
  return transportFile(text, logAppName, logMaxSize);
}

function deleteLog(howManyDaysAgo: number) {
  deleteLogFiles(howManyDaysAgo, logAppName);
}

export { log, setup, deleteLog };
