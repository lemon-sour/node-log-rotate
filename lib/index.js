"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_file_1 = require("./transport-file");
const delete_log_files_1 = require("./delete-log-files");
let logAppName = 'node-log-rotate';
let logMaxSize = 5 * 1024 * 1024;
function setup(options) {
    logAppName = options.appName;
    logMaxSize = options.maxSize;
}
exports.setup = setup;
function log(text) {
    transport_file_1.default(text, logAppName, logMaxSize);
}
exports.log = log;
function deleteLog(howManyDaysAgo) {
    delete_log_files_1.default(howManyDaysAgo, logAppName);
}
exports.deleteLog = deleteLog;
