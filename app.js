// Array para guardar los nombres ingresados
const listaDeAmigos = [];

// Función para añadir un nombre a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre !== "") {
    listaDeAmigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
  }
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // Limpiar lista anterior

  listaDeAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

// Función para sortear un nombre al azar
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  if (listaDeAmigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay nombres para sortear.";
    resultado.appendChild(li);
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const nombreSorteado = listaDeAmigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(li);
}
