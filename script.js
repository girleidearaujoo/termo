// word_matrix = [['B', 'o', 'a'],
//                ['v', 'i', 'a', 'g', 'e', 'm'],
//                ['l', 'e', 'k'],
//                ['e', 's', 't', 'a', 'r', 'e', 'm', 'o', 's'],
//                ['e', 's', 'p', 'e', 'r', 'a', 'n', 'd', 'o'],
//                ['o', ], 
//                ['m', 'e', 'l', 'h', 'o', 'r'],
//                ['p', 'r', 'o', 'f', 'e', 's', 's', 'o', 'r']
//                ['d', 'e'],
//                ['p', 'o', 'o', ' '],
//                ['d', 'o', ],
//                ['c', 'a', 'm', 'p', 'u', 's'],
//                ['r', 'i', 'o',],
//                ['l', 'a', 'r', 'g', 'o']]

// function ver_word(palavra, palavra_matrix) {
//     if(palavra.length !== palavra_matrix.length){
//         return "Palavra invalida"
//     }
// }
let htmlPalavra = document.getElementById("palavra");
let btTentativa = document.getElementById("btTentativa");
let numTentativas = 5;
var wordArray = ["teste"];
var letras = wordArray[0].split('');
let tentativaAtual = 1;

function novaTentativa(numTentativa){

       console.log(letras);
        desenhar(letras, htmlPalavra, numTentativa)
    
}

btTentativa.addEventListener("click", ()=>{
    let erros = 0;
    if(tentativaAtual == 1){
        novaTentativa(tentativaAtual)
        tentativaAtual++
        return
    }

     let tentativa 
    let tentativaNum
    for (let i = 0; i < letras.length; i++) {
        tentativaNum = document.getElementById("tentativaNum" + (tentativaAtual-1).toString());
         tentativa = tentativaNum.children
        // console.log(teste)
         //console.log(tentativa[i].className)
        // tentativa = tentativaNum.querySelector("inptTentativa" + i.toString());
        if(i>0){
            if(tentativa[i - 1].dataset.valorDigitado ){
                tentativa[i - 1].value = tentativa[i-1].dataset.valorDigitado 
                console.log(tentativa[i-1].dataset.valorDigitado );
            }
        }

    if(tentativa[i].value == ""){

        for(let j = i; j >= 0; j--){
            console.log(j)
            tentativa[j].value = ""
            tentativa[j].style = "background-color: #444c56"
            tentativa[j].className = 'cubo'
            tentativa[j].disabled = false;
        }
        alert("Preencha todos os espaços");
        return;
    }else{
        
        tentativa[i].dataset.valorDigitado = tentativa[i].value
        if(letras.includes(tentativa[i].value) && !((tentativa[i].value).toLowerCase() == letras[i])){
            console.log("Letra no lugar errado!")
            tentativa[i].style = "background-color:  rgb(179, 143, 43)"
            tentativa[i].class = 'present'
            erros++
        } else if((tentativa[i].value).toLowerCase() == letras[i]){
            tentativa[i].style = "background-color: #34db60"
            tentativa[i].className = 'correct'
        }else{
            console.log("Errou!")
            tentativa[i].style = "background-color: rgb(255, 0, 0)"
            tentativa[i].className = 'absent'
            erros++
        }
        tentativa[i].disabled = true;
    }
    }
    if(erros == 0){
        console.log("Você ganhou")
        btTentativa.disabled = true;
        return
    }
    numTentativas--
    if(numTentativas > 0){
        novaTentativa(tentativaAtual);
        tentativaAtual++
    }else{
        console.log("Você perdeu")
        btTentativa.disabled = true;
    }

});
