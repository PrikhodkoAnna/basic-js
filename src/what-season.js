import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default 
/*getSeason('foo');*/

function getSeason(date) {

 if(!date) {
    return 'Unable to determine the time of year!';
  } 
  

 if ((Object.prototype.toString.call(date) !== '[object Date]') || (Object.keys(date).length !== 0)) {
    throw new Error ('Invalid date!');

  }
  
let month = date.getMonth();
if (((month === 0) || (month === 1)) || (month === 11)){
  return 'winter';
}
if ((month >= 2) && (month <= 4)) {
  return 'spring';
}
if ((month >= 5) && (month <= 7)) {
  return 'summer';
}
if ((month >= 8) && (month <= 10)) {
  return 'fall';
}
  

}


/*const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

getSeason(fakeDate);

function getSeason(date) {

  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if ((Object.prototype.toString.call(date) === '[object Date]') && (!(isNaN(date.getTime())))) {
  
console.log(date.getTime());
  }

else {
  
throw new Error ('Invalid date!');

}

}*/