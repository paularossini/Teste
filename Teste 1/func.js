function verificaFibonacci(num) {
    let a = 0;
    let b = 1;
    let c = 0;

    if(a === num || b === num){
        return true;
    }else{
        while (c < num) {
            c = a + b;
            a = b;
            b = c;
          }
          
          if (c == num) {
            return true;
          } else {
            return false;
          }
    }
}
  
function ex1(){
    var num = document.getElementById('num').value; 

    if(verificaFibonacci(num) == true){
        console.log(`${num} pertence a sequencia`);
    }else{
        console.log(`${num} não pertence a sequencia`);
    }
}

function reverteString(palavra) {
    var palavra = palavra.value;
    var letras = [];
    
    for (var i = 0; i < palavra.length; i++) {
        letras.push(palavra[i]);
    }

    // inverte a ordem das letras no array "letras"
    for (let i = 0; i < letras.length / 2; i++) {
        var letra2 = letras[i];
        letras[i] = letras[letras.length - 1 - i];
        letras[letras.length - 1 - i] = letra2;
    }
  
    // une as letras em uma única string
    var palavraInvertida = "";
    for (let i = 0; i < letras.length; i++) {
        palavraInvertida += letras[i];
    }

    return palavraInvertida;
}

function ex2(){
    var palavra = document.getElementById('palavra'); 
    var palavraInvertida = reverteString(palavra);
  
    console.log(`A string invertida é: ${palavraInvertida}`);
}