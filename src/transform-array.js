import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
 
  let newArr = arr.filter(function(f){return f;})
  
  newArr.map(function check (elem, i, array) {

      switch(elem) {
      case '--discard-next': {
        if ((array[i + 1]) && (typeof(array[i + 1]) === 'number')) {
        newArr.splice(i, 2);
        if ((newArr[i] === '--discard-prev') || (newArr[i] === '--double-prev')) {
          newArr.splice(i, 1);
      }
        }
        else {
          newArr.splice(i, 1);
        }
        break;
      }
      case '--discard-prev': {
        if ((array[i - 1]) && (typeof(array[i - 1]) === 'number')) {
        newArr.splice(i - 1, 2);
          }
        else {
        newArr.splice(i, 1);
          }
          break;
      }
      case '--double-next': {
        if ((array[i + 1]) && (typeof(array[i + 1]) === 'number')) {
        newArr.splice(i, 1, array[i + 1]);
        }
        else {
          newArr.splice(i, 1);
        }
        break;
      }
      case '--double-prev':  {
       if ((array[i - 1]) && (typeof(array[i - 1]) === 'number')) {
        newArr.splice(i, 1, array[i - 1]);
        }
        else {
          newArr.splice(i, 1);
        }
        break;
      }
    }
  } )
 
      console.log (arr);
  return (newArr);
  }

