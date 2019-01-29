import { OptionInterface } from './interface/option-interface';
import transportFile from './transport-file';
import deleteLogFiles from './delete-log-files';

let logAppName: string = 'node-log-rotate';
let logMaxSize: number = 5 * 1024 * 1024;

function setup(options: OptionInterface) {
  logAppName = options.appName;
  logMaxSize = options.maxSize;
}

function log(text: string): boolean {
  return transportFile(text, logAppName, logMaxSize);
}

function deleteLog(howManyDaysAgo: number) {
  deleteLogFiles(howManyDaysAgo, logAppName);
}

export { log, setup, deleteLog };
