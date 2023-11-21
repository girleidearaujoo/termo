function desenhar(arrayWords, tag){
for (let i = 0; i < arrayWords.length; i++) {
    tag.innerHTML +=
    `<div > 
    <input type="text" name="" id=${"inptTentativa" + i.toString()} class='cubo' maxlength='1'>
    </div>
        `;
    }
}