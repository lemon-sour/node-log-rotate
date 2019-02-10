:lipstick: node-log-rotate :lipstick:
===============

  <a href="https://www.npmjs.com/package/node-log-rotate"><img src="https://badgen.net/npm/dm/node-log-rotate" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/node-log-rotate"><img src="https://badgen.net/npm/v/node-log-rotate" alt="Version"></a>
  <a href="https://www.npmjs.com/package/node-log-rotate"><img src="https://badgen.net/npm/license/node-log-rotate" alt="License"></a>
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)


## Description

inspire:

[megahertz/electron-log: Just a very simple logging module for your Electron application](https://github.com/megahertz/electron-log)

Just a very simple logging module for your node.js application.
No dependencies. No complicated configuration. Just require and use.

By default it writes logs to the following locations:

 * **on Linux:** `~/.config/<app name>/<date+time>log.log`
 * **on OS X:** `~/Library/Logs/<app name>/<date+time>log.log`
 * **on Windows:** `$HOME/AppData/Roaming/<app name>/<date+time>log.log`


## Installation

 Install with [npm](https://npmjs.org/package/node-log-rotate):

    npm install node-log-rotate

or

 Yarn

    yarn add node-log-rotate


## Usage

### Basic usage

Name of the directory get from `process.env.npm_package_name`.

 ```js
 import { log } from 'node-log-rotate';

 log('Hello, log');
 ```

### ES2015
 
 ```js
 import { setup, log } from 'node-log-rotate';
 setup({
   appName: 'project-name',  // If you want to specify the project name, you can specify it.
   maxSize: 10 * 1024 * 1024
 });

 log('Hello, log');
 ```

### CommonJS

 ```js
 var log = require('node-log-rotate');
 log.setup({
   appName: 'project-name',   // If you want to specify the project name, you can specify it.
   maxSize: 10 * 1024 * 1024
 });

 log.log('Hello, log');
 ```


## About deleting log files

For this sample, log files before 10 days ago will be deleted.

 ```js
 import { setup, deleteLog } from 'node-log-rotate';
 setup({
   appName: 'project-name'  // If you want to specify the project name, you can specify it.
 });

 deleteLog(10);
 ```


## Maintainers

 - [hisasann](https://github.com/hisasann)

## License

 MIT © [hisasann](https://github.com/hisasann)
