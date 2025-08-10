let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function eliminarAmigo(index) {
    if (confirm(`¿Deseas eliminar a "${listaAmigos[index]}" de la lista?`)) {
        listaAmigos.splice(index, 1);
        mostrarLista();
    }
}

function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar lista

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.addEventListener("click", () => {
            eliminarAmigo(index);
        });

        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

function borrarLista() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para borrar.");
        return;
    }

    if (confirm("¿Estás seguro de borrar toda la lista?")) {
        listaAmigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    }
}