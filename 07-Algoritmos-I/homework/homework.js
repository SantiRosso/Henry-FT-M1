'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];         
  let denominador = 2;
  while(num !== 1) {
    if(num % denominador === 0) {
      factores.push(denominador);
      num = num / denominador; 
    }
    else {
      denominador += 1;
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let huboCambio = true;
  while(huboCambio) {
    huboCambio = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array [i+1] ){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        huboCambio = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
   let j = i - 1;
   let auxiliar = array[i];   
   while(j >= 0 && array[j] > auxiliar) {
    array[j+1] = array[j];
    j = j - 1;
   }
   array[j+1] = auxiliar
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    let min = i;
  for(let j = i+1; j < array.length; j++) {
    if(array[j] < array[min]) {
      min = j;
    }
  }
  if(min != i){
    let auxiliar = array[i];
    array[i] = array[min];
    array[min] = auxiliar;
  }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
