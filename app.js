const listaAmigos = document.getElementById('listaAmigos'); 
const inputNombre = document.getElementById('amigo');
let listaNombres = [];

function agregarAmigo(){
    let nombre = inputNombre.value.trim(); // Trim elimina los espacios en blanco

    if(nombre !== ''){
       let nuevoElemento = crearElemento('li');
        nuevoElemento.textContent = nombre;
        if (!listaNombres.includes(nombre)) {
            listaAmigos.appendChild(nuevoElemento);
            listaNombres.push(nombre);
        } else {
            alert('Este nombre ya está en la lista.');
        }
        inputNombre.value = '';
    } else alert('¡Error! Ingresa un nombre válido');
}

function crearElemento(tipo){
    let elemento = document.createElement(tipo);
    return elemento; 
}

function limpiarLista() {
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }
    listaNombres = []; 
}

function sortearAmigo(){

    if (listaNombres.length === 0) {
        alert('No hay nombres en la lista. Agrega algunos amigos primero.');
        return;
    }

    let amigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    limpiarLista();
  
    let mensaje = crearElemento('h1');
    mensaje.style.color = 'green';
    mensaje.textContent = `El amigo secreto es: ${amigoSecreto}`;
    listaAmigos.appendChild(mensaje);
}
