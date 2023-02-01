
function capitalize(text){
  return text.toUpperCase();
}

function reverseString(text){
  let length = text.split('');
 
  return length.reduceRight((accum,current) => accum+current,"")
}

const calculator = () =>{
  
  function add(num1,num2){
    return num1+num2;
  }
  function subtract(num1,num2){
    return num1-num2;
  }

  function divide(num1,num2){
    return num1/num2;
  }

  function multiply(num1,num2){
    return num1*num2;
  }


  return {add,subtract,divide,multiply}
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');
const alphabetCapital = alphabet.toUpperCase();
const alphabetCapitalArray = alphabetCapital.split('');


function caesarCipher(text,shift = 1){
  const textArray = text.split('');

  let textToNumbers = textToNumber(textArray); 
  let shifting = shiftedNumber(textToNumbers,shift);  //for lowercase
  let convertToLetter = convertNumber(shifting);
  

    return convertToLetter.join('');
}

function shiftedNumber(textNumbersOriginal,shift = 1){
  return textNumbersOriginal.map(x => {
      if((typeof x) != 'number') 
        return x;
      else if(x >=26) 
        return ((x-100)+shift)%26+100;
      return (x+shift)% 26;
})
}

function convertNumber(array){
  let newArray = [];
array.forEach(element => {
  if(typeof element !== 'number'){
    newArray.push(element);
  }
  else if(element >=26){
    newArray.push(alphabetCapitalArray[element-100]);
  }
  else{
    newArray.push(alphabetArray[element]);

  }
});    
return newArray;
}

function textToNumber(textArray){
  let numbersArray = [];
  let regex = /[,./! ]/ ;
  let regexUpper = /[A-Z]/ ;
  for(let i = 0;  i <textArray.length;i++){
    if(regex.test(textArray[i])){
      numbersArray.push(textArray[i]);
    
    }
    else if(regexUpper.test(textArray[i])){
      let numbers = alphabetCapitalArray.indexOf(textArray[i], 0)
      numbersArray.push(numbers+100);
    }
    else{
      let numbers = alphabetArray.indexOf(textArray[i], 0)
      numbersArray.push(numbers);
    }
}
return numbersArray;
}


module.exports = {capitalize,reverseString,calculator,caesarCipher};
