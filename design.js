function desenhar(arrayWords, tag, numTentativa){
for (let i = 0; i < arrayWords.length; i++) {
    tag.innerHTML +=
    `<div id='${"tentativaNum" + numTentativa.toString()}'> 
    <input type="text" name="" id=${"inptTentativa" + i.toString()} class='cubo' maxlength='1'>
    </div>
        `;
    }
}