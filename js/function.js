const titulo = document.querySelector('#jojo');

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 200 * i);
    })
}
typeWrite(titulo);