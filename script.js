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
var wordArray = ["teste"];
var letras = wordArray[0].split('');

function testar(){
 
    console.log(letras);

        desenhar(letras, htmlPalavra)
    
}

btTentativa.addEventListener("click", ()=>{
    let tentativa 
    for (let i = 0; i < letras.length; i++) {
        tentativa = document.getElementById("inptTentativa" + i.toString());
        if(tentativa.value == letras[i]){
            console.log("Acertou!")
        }else{
            console.log("Errou!")
        }
        
    }

});