function desenhar(arrayWords, tag, numTentativa){
    let tentativaNum = "tentativaNum" + numTentativa.toString();
    tag.innerHTML += `<div id='${tentativaNum}' class='coluna'> </div>`;
for (let i = 0; i < arrayWords.length; i++) {
    document.getElementById(tentativaNum).innerHTML +=
    `
    <input type="text" name="" id=${"inptTentativa" + i.toString()} class='cubo' maxlength='1' autocomplete="off">
    
        `;
    }
}