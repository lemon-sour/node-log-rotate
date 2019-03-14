import * as _ from 'lodash'
import * as moment from 'moment'

export default function(): string {
  let now = moment()
  return `${_.padStart(now.hours() + '', 2, '0')}:${_.padStart(
    now.minute() + '',
    2,
    '0'
  )}:${_.padStart(now.second() + '', 2, '0')}`
}
