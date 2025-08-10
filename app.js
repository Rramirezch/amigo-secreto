// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    // Verifica si el nombre ingresado no está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    }
  // Agrega el nombre del amigo al arreglo "amigos"
        amigos.push(nombre);
        console.log(amigos);
    mostrarAmigos()
    // Limpia el input después de agregar el amigo
    limpiarInput();
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}


function mostrarAmigos() {
   //adiciona al index.html la lista de amigos
   let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
         let li = document.createElement("li");
         li.textContent = amigo;
         lista.appendChild(li);
    });
}

function sortearAmigo() {
    let amigoSecreto = document.getElementById("resultado");
    amigoSecreto.innerHTML = "";
    // Verifica si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }else {
        // Selecciona un amigo al azar
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        // Muestra el amigo sorteado
        let li = document.createElement("li");
            li.textContent = ('el amigo secreto es: ' + amigoSorteado);
            amigoSecreto.appendChild(li);
    }
    amigos = [];
    mostrarAmigos();
    limpiarInput()
   
}
