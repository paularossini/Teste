function ex1(){
    var arrayNumero = ["1", "2", "3", "6", "7", "8"];
    var num = 1; 
    var x = 0;
    var faltante = [];
    for (var i = 0; i < arrayNumero.length; i++) {
        while(num != arrayNumero[i]){
            faltante[num-1] = num;
            num++
        }  
        num++      
    }
    faltante.forEach(function(numero, i) {
        window.alert(i+ '° posisção: ' +numero);
    })
}

function ex2(){
    var num = [-1, 0, 1, 2, -1, -4];
    var guarda = '';
    for (var i = 0; i < num.length; i++) {
        if(i+1 >= num.length || i+2 >= num.length){
            
        }else{
            if(num[i] + num[i+1] + num[i+2] == 0){
                guarda = `A soma entre  ${num[i]} + ${num[i+1]} + ${num[i+2]} = 0`
            } 
        }
    }
    window.alert(guarda);
}

function ex3(){
    var num = [2, 7, 7, 1, 8, 2, 7, 8, 7];
    var x = 0
    var guarda = [];
    for (var i = 0; i < num.length; i++) {
        if(i+1 >= num.length || i+2 >= num.length){
            
        }else{
            if(num[i] + num[i+1] + num[i+2] == 16){
                guarda[x] = `${num[i]} + ${num[i+1]} + ${num[i+2]} = 16`
                x++
            } 
        }
    }
    guarda.forEach(function(valor, i) {
        window.alert('('+i+ '°)  ' +valor);
    });
}

function ex4(){
    var num = [5, 3, 4, 3, 4];
    var unico = false
    var guarda = [];
    var x = 0;

    for (var i = 0; i < num.length; i++) {
        for(var c = 0; c < num.length; c++) {
            if(c != i){
                if(num[c] == num[i]) {
                    unico = true;   
               }
            }
        }
        if(unico != true){
            guarda[x] = num[i]; 
            x++
        }else{
            unico = false;
        }
    }

    guarda.forEach(function(valor, i) {
        window.alert('('+(i+1)+ '°)  ' +valor);
    });
}

function ex5(){
    var num = [5, 3, 4, 3, 5, 5, 3];
    var unico = 0
    var guarda = [];
    var x = 0;

    for (var i = 0; i < num.length; i++) {
        for(var c = 0; c < num.length; c++) {
            if(c != i){
                if(num[c] == num[i]) {
                    unico++;   
               }
            }
        }
        if(unico != 2){
            guarda[x] = num[i]; 
            x++
        }else{
            unico = 0;
        }
    }

    guarda.forEach(function(valor, i) {
        window.alert('Número que não se repete 3 vezes: ' +valor);
    });
}

function ex6(){
    var num = document.getElementById('num'); 
    var sequencia = []  
    var x = 1 

    if(num.value.length == 0){
        window.alert('[ERRO] Digite outro numero!');
    }else{
        var i = Number(num.value);
        for(var c = 0; c < i; c++){
            if(c == 0 || c == 1){
                sequencia[c] = 1;
            }else{
                sequencia[c] = sequencia[c-1] + sequencia[c-2]
            }
        }
       
        for(var c = 0; c < i; c++){
            window.alert(`${sequencia[c]}`) ; 
        } 
    }
}
