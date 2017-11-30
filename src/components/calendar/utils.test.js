import moment from 'moment-holiday';
import { getCalendarDays, getCalendarWeeks } from './utils';

test('getCalendarDays returns 42 days', () => {
  expect( getCalendarDays( moment() ).length ).toBe(42);
});

test('getCalendarWeeks returns 6 weeks', () => {
  expect( getCalendarWeeks( moment() ).length ).toBe(6);
});
