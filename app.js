// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


numeroaleatorio= 0

let amigos= []

amigo=''


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
    let fLen = amigos.length; 
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + amigos[i] + "</li>";
      } 
}

mostrarlista

function generarnumeroaleatorio(){
    total=amigos.length
    return Math.floor(Math.random() * total);
}

function sortearAmigo(){
    let sorteado= document.getElementById('resultado')
    sorteado.innerText=amigos[generarnumeroaleatorio()]
}





