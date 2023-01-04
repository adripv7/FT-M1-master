'use strict';

function BinarioADecimal(num) {
   console.log(num)
   let sum = 0;
   for (let i = 0; i < num.length; i++) {
      sum += +num[i] * 2 ** (num.length - 1 - i)
   }

   return sum;

}

function DecimalABinario(num) { 
console.log (num)

var resultado = "";
while (num !==0){
   resultado = (num%2) + resultado;
   num = Math.floor (num/2)

}

return resultado;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
