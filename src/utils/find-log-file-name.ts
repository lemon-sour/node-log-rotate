import findLogPath from './find-log-path';

export default function (appName: string = '', date: string) {
  return [findLogPath(appName), date, '_', 'log.log'].join('');
}
