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
    if(tentativaAtual == 1){
        novaTentativa(tentativaAtual)
        tentativaAtual++
        return
    }

    let tentativa 
    for (let i = 0; i < letras.length; i++) {
        tentativa = document.getElementById("inptTentativa" + i.toString());
    if(tentativa.value == ""){
        alert("Preencha todos os espaços");
        break;
    }else{
        if(letras.includes(tentativa.value) && !((tentativa.value).toLowerCase() == letras[i])){
            console.log("Letra no lugar errado!")
            tentativa.class = 'present'
        } else if((tentativa.value).toLowerCase() == letras[i]){
            console.log("Acertou!")
            tentativa.disabled = true;
            tentativa.class = 'correct'
        }else{
            console.log("Errou!")
            tentativa.class = 'absent'
        }
        
    }
    }
    numTentativas--
    if(numTentativas > 0){
        tentativaAtual++
        novaTentativa(tentativaAtual);
    }else{
        console.log("Você perdeu")
    }

});
