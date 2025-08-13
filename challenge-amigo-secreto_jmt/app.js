//PARTE 1 El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    // 1. el nombre
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // 2. Validacion de datos (evitar vacíos, duplicados y numeros)
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre debe contener solo letras y espacios.");
        //Para Limpiar el input si la validación falla
        inputAmigo.value = ""; 
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    // 3. Para agregar el nombre al array
    amigos.push(nombre);

    // 4. Limpiar la caja y actualizar la lista en la pantalla
    inputAmigo.value = "";
    actualizarLista();
}

// funcion para actualizar listay obtener el elemento

function actualizarLista () {
const lista = document.getElementById("listaAmigos");
// limpiar la lista
lista.innerHTML = "";
//iteración sobre el arreglo
for (let i = 0; i<amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    // agregar el <li> a la lista
    lista.appendChild(item);
}
}
// PARTE 2
function sortearAmigo() {
    // 1. Verificar que el array de amigos no esté vacío
    if (amigos.length === 0) {
        alert("¡Agrega al menos dos amigos para poder sortear!");
        return; // Salir de la función si no hay amigos
    }
/* 2. Generar un índice aleatorio
Lo multiplico por la longitud del array para obtener un número entre 0 y el número de amigos*/
  let numeroSorteado = Math.floor(Math.random() * amigos.length);
// 3. Seleccionando el amigo con el índice aleatorio
  let amigoSorteado = amigos[numeroSorteado];
  // 4. Mostrar el resultado
  console.log("El amigo sorteado es:", amigoSorteado);

 //4. Obteniendo el elemento HTML donde se mostrará el resultado
  const elementoResultado = document.getElementById("resultado");
  
  // Actualizar el contenido de ese elemento con el nombre sorteado
  elementoResultado.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
}