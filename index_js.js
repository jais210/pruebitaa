ñfunction multiplicar (array, numero)
{ resultado = array.reduce(function(total, num){
    return total * num;
  }, numero);
 return resultado;
}

// var assert = require("assert");
// describe("prueba unitaria",function(){
//     assert.equal
// })

