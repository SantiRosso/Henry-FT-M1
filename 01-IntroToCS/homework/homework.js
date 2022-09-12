'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let a = 0;
  let numInv = num.split('').reverse().join('');
	for(let i = 0; i < num.length; i++){
    a += numInv[i] * Math.pow(2, i);
 }
 return a;
}

function DecimalABinario(num) {
  // tu codigo aca
  let a = num;
  let arr = [];
  while(a > 0) {
    arr.unshift(a % 2);
    a = Math.floor(a / 2);
  }
  let b = arr.join('')
  return b;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}