
import {calculator} from './prac.js'

const calc = calculator();
function analyzeArray(array){
  let objectData = {};
  objectData.average =  (array.reduce((accum,current) => accum+ current,0))/array.length;
  objectData.min = array.reduce((accum,current) =>  (current< accum) ? current: accum);
  objectData.max = array.reduce((accum,current) =>  (current> accum) ? current: accum);
  objectData.length = array.length;
  return objectData;
}


module.exports = analyzeArray;