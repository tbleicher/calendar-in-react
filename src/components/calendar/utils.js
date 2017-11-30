/* import moment from 'moment-holiday'; */
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
const moment = extendMoment(Moment);


export function getCalendarDays(date) {
  const start = moment(date).startOf('month').startOf('week');
  let end = moment(date).endOf('month').endOf('week');
  let arr = Array.from(moment.range(start, end).by('day'));

  if (arr.length === 42) {
    return arr
  }

  // this happens when 1st of February falls on a Sunday
  if (arr.length === 28) {
    return Array.from(moment.range(
      start.subtract(7, 'days'), end.add(7, 'days')).by('day'));
  }

  return Array.from(moment.range(start, end.add(7, 'days')).by('day'));
}


export function getCalendarWeeks(date=moment()) {
  const days = getCalendarDays(date); 
  const weeks = [];
  
  while (days.length) {
    weeks.push(days.splice(0,7));
  }

  return weeks;
}