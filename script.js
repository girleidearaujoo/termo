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
let btTentativa = document.getElementById("btTentativa")
let wordArray = ["teste"];

function testar(){
    let letras = wordArray[0].split('');
    console.log(letras);

    for (const letra of letras) {
        desenhar(letra, htmlPalavra)
    }
}