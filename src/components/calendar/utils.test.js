import moment from 'moment-holiday';
import { getCalendarDays, getCalendarWeeks } from './utils';

test('getCalendarDays returns 42 days', () => {
  expect( getCalendarDays( moment() ).length ).toBe(42);
});

test('getCalendarWeeks returns 6 weeks', () => {
  expect( getCalendarWeeks( moment() ).length ).toBe(6);
});

test('getCalendarDays adds a whole week', () => {
  expect( moment("2009-02-01").day() ).toBe(0)
  expect( getCalendarDays( moment("2009-02-01") ).length ).toBe(42);
});