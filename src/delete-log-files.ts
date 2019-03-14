import * as fs from 'fs'
import * as _ from 'lodash'
import * as moment from 'moment'
import { YearMonthDayInterface } from './interface/year-month-day-interface'
import findLogPath from './utils/find-log-path'

const format: string = 'YYYY-MM-DD'

export default function(howManyDaysAgo: number, appName: string) {
  const path: string = findLogPath(appName)
  let files: string[] = []
  try {
    files = fs.readdirSync(path)
  } catch (e) {
    return null
  }

  _.forEach(files, (file: string, index: number) => {
    const yearMonthDay: YearMonthDayInterface | null = getYearMonthDay(file)
    if (!yearMonthDay) {
      return
    }

    if (!isBefore(howManyDaysAgo, yearMonthDay)) {
      return
    }

    deleteLogFile(path + file)
  })
}

function getYearMonthDay(file: string) {
  const split: string[] = _.split(file, '-', 3)
  if (split.length < 3) {
    return null
  }

  return {
    year: split[0],
    month: split[1],
    day: _.split(split[2], '_', 1)[0]
  } as YearMonthDayInterface
}

function isBefore(howManyDaysAgo: number, yearMonthDay: YearMonthDayInterface) {
  const agoDays = moment(moment().format(format)).subtract(
    howManyDaysAgo,
    'days'
  )
  const fileDays = moment(
    [yearMonthDay.year, yearMonthDay.month, yearMonthDay.day].join('-')
  )
  return moment(fileDays).isBefore(agoDays)
}

function deleteLogFile(filePath: string) {
  try {
    fs.unlinkSync(filePath)
  } catch (e) {
    return null
  }
}
