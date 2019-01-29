import * as _ from 'lodash';
import * as moment from 'moment';

export default function(): string {
  return `${moment().get('year')}-${_.padStart(
    moment().get('month') + 1 + '',
    2,
    '0',
  )}-${_.padStart(moment().get('date') + '', 2, '0')}`;
}
