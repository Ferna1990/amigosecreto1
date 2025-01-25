// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


numeroaleatorio= 0

let amigos= []

amigo=''

listado = []

amigoAmostrar= []

function vaciar(){
    let valorcaja = document.getElementById('amigo')
    valorcaja.value = ''
}

function agregarAmigo(){
    amigo=document.getElementById('amigo').value
    if (amigo){
        amigos.push(amigo)
        vaciar() 
    }else{
        alert('Ingresa un nombre!')
    }
    
}



function mostrarlista(){
    let elementohtml = document.getElementById('listaAmigos');
    elementohtml.innerHTML= '';  
    for (var x of amigos){
        elementohtml.appendChild(x)
    }  
}

mostrarlista

function generarnumeroaleatorio(){
    return Math.floor(Math.random() * 11);
}

function sortearAmigo(){
    numeroaleatorio= generarnumeroaleatorio()
    let sorteado= document.getElementById('resultado')
    sorteado.innerHTML(amigos[numeroaleatorio])
}





