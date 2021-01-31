// 1. create Date object for current location

let date = new Date();
console.log(date);

// Express this local time as the number of msec since Jan. 1, 1970, by invoking the Date()object's getTime() method:

let localTime = date.getTime();
console.log(date.getTime());


// 2. Obtain local UTC offset and convert to 

// By default, this method returns the time zone offset in minutes, so convert this value to milliseconds for easier manipulation:

let localOffset = date.getTimezoneOffset() * 60 * 1000;
console.log(localOffset);

// ** Note that a negative return value from getTimezoneOffset() indicates that the current location is ahead of UTC, while a positive value indicates that the location is behind UTC.**


// 3. Obtain the current UTC time in msec, by adding the local time zone offset to the local time.

let utc = localTime + localOffset;
console.log(utc);

// 4. Now, obtain destination city's UTC offset in hours, convert it to msec and add it to UTC time.

// Anchorage (USA): -9h 

// convert time in milliseconds

offset = -9;

anchorage = utc + (1000 * 60 * 60 * offset)

console.log(anchorage);

// 5. Change the time value to a human-readable date/time string by initializing a new Date() object with it, and calling the object's toLocaleString() method.

nd = new Date(anchorage);
document.writeln("Anchorage time is " + nd.toLocaleString() + "<br>")