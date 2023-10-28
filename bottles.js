
function generateSingleStanza(number) {
    let bottle = "бутылок";
    if (number === 1) {
    bottle = "бутылка";
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
    bottle = "бутылки";
    }
    let stanza = `${number} ${bottle} пива на стене, ${number} ${bottle} пива!\n`
    stanza += `Возьми одну, пусти по кругу, ${number - 1} `

    if (number === 2) {
        stanza += "бутылка пива на стене!\n";
    } else if (number === 1) {
        stanza += "бутылок пива на стене!\n";
    } else {
        stanza += "бутылок пива на стене!\n";
    }
    return stanza
}
generateSingleStanza(99);

function generateSongText() {
    songText = "";
    for (let i = 99; i > 0; i--) {
        songText += generateSingleStanza(i)
    }
    return songText
}


console.log(generateSongText()); 