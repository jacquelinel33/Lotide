const countLetters = function(stringInput) { 
  let result = {};

  for(let letter of stringInput) {
    if (!result[letter]) {
      result[letter] = 0;
    } 

    result[letter]++;
  }
  delete result[' ']; 
  return result;
};


console.log(countLetters("lighthouse in the house"));