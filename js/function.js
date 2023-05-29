
/**
 * 
 * La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 * 
 * 
*/
function encriptar(){
    console.log("encriptando");
    let text = document.getElementById("text").value.toLowerCase();
    if(text == '') return;
    let newText = '';
    for (const position in text) {
        switch (text[position]) {
            case 'e':
                newText += 'enter';
                break;
            case 'i':
                newText += 'imes';
                break;
            case 'a':
                newText += 'ai';
                break;
            case 'o':
                newText += 'ober';
                break;
            case 'u':
                newText += 'ufat';
                break;
            default:
                newText += text[position];
                break;
        }
    }
    document.getElementById("message").style.display = "none";
    let resultHtml = document.getElementById("result");
    resultHtml.style.display = "block";
    resultHtml.innerText = newText;

    console.log("RESULTADO FINAL: " + newText);

}


function desencriptar(){
    console.log("desencriptando");

}