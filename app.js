// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


numeroaleatorio= 0

let amigos= []

amigo=''


let lista= document.getElementById(`listaAmigos`)

function vaciar(elemento){
    let valorcaja = document.getElementById(elemento)
    valorcaja.value = ''
}


function agregarAmigo(){
    amigo=document.getElementById('amigo').value
    if (amigo){
        amigos.push(amigo)
        mostrarlista(amigo)
        vaciar('amigo')
    }else{
        alert('Ingresa un nombre!')
    }
    
}

/*
function mostrarlista(){

    let elementohtml = document.getElementById('listaAmigos');
    elementohtml.innerHTML= ''; 
    let fLen = amigos.length; 
    for (let i = 0; i < fLen; i++) {
        elementohtml.innerText= `<li> ${amigos[i]} </li>`;
      } 
}
``
*/
function mostrarlista(x){
        let elemento= `<li>${x}</li>`
    lista.insertAdjacentHTML(`beforeend`,elemento)


}

function generarnumeroaleatorio(){
    total=amigos.length
    return Math.floor(Math.random() * total);
}

function sortearAmigo(){
    let sorteado= document.getElementById('resultado')
    sorteado.innerText=amigos[generarnumeroaleatorio()]
}



