import { DateTime } from 'luxon';

const ds = '2018-07-24';
const iso = (DateTime.fromISO(ds));
const now = DateTime.local();

console.log(iso)
console.log(now)

console.log(';;;;;;;;;;;;;;;;;;;')

console.log(iso.setLocale('ja'))
console.log(now.setLocale('ja'))

console.log(';;;;;;;;;;;;;;;;;;;')

console.log(iso.toUTC())
console.log(now.toUTC())

