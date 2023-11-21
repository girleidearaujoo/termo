function desenhar(arrayWords, tag){
for (let i = 0; i < arrayWords.length; i++) {
    tag.innerHTML +=
    `<div class='cubo'> 
    <input type="text" name="" id=${"inptTentativa" + i.toString()}>
 </div>
        `;
    }
}