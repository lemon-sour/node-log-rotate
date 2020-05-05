import * as os from 'os';
import * as fs from 'fs';
import getNowDate from './utils/get-now-date';
import getNowTime from './utils/get-now-time';
import findLogFileName from './utils/find-log-file-name';

let file: string | undefined;
let stream: any;
let date: string;

export default function (
  msg: string,
  appName: string,
  maxSize: number
): boolean {
  const text = msg;

  date = dateDetermination(date);

  if (!stream) {
    file = file || findLogFileName(appName, date);
    if (!file) {
      // error
      return false;
    }

    if (maxSize > 0) {
      logRotate(file, maxSize);
    }

    stream = fs.createWriteStream(file, { flags: 'a' });
  }

  if (!stream) {
    return false;
  }

  stream.write([date, ' ', getNowTime(), ' ', text, os.EOL].join(''));

  return true;
}

function dateDetermination(d: string) {
  const now: string = getNowDate();

  if (d !== now) {
    stream = undefined;
    file = undefined;
  }

  return now;
}

function logRotate(file: string, maxSize: number) {
  try {
    const stat = fs.statSync(file);
    if (stat.size > maxSize) {
      fs.renameSync(file, file.replace(/log$/, 'old.log'));
    }
  } catch (e) {
    // error
  }
}
