const textarea = document.getElementById("text");
const resultHtml = document.getElementById("result");
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
    let text = textarea.value.toLowerCase();
    if(text == '') return;
    const keys = ['e', 'i', 'a', 'o', 'u'];
    const resultKeys = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    for (const position in keys) {
       text = text.replaceAll(keys[position], resultKeys[position]);
    }
    document.getElementById("message").style.display = "none";
    document.getElementById("container-result").style.display = "block";
    resultHtml.innerHTML = text;

    console.log("RESULTADO FINAL: " + text);

}


function desencriptar(){
    let text = textarea.value.toLowerCase();
    if(text == '') return;
    const keys = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    const resultKeys = ['e', 'i', 'a', 'o', 'u'];
    for (const position in keys) {
       text = text.replaceAll(keys[position], resultKeys[position]);
    }
    document.getElementById("message").style.display = "none";
    document.getElementById("container-result").style.display = "block";
    resultHtml.innerHTML = text;
    console.log("RESULTADO FINAL: " + text);

}

function copy(){
    resultHtml.select();
    navigator.clipboard.writeText(resultHtml.value);
}