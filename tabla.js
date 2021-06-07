function pintaTabla(numero) {
    const anclaje = document.querySelector("#folio")
    for (let i=1; i <= 10; i++) {
        const p = document.createElement("p")
        const plantilla = `${i} x ${numero} = ${i * numero}`
        p.innerHTML = plantilla
        anclaje.appendChild(p)
    }

}

function limpiarFolioDirecto() {
    const items = document.querySelectorAll("#folio p")

    for (let i=0; i < items.length; i++) {
        items[i].remove()
    }

}

function limpiarFolioConConstante() {
    items = document.querySelectorAll("p")
    const l = items.length

    for (let i=0; i < l; i++) {
        items[i].remove()
    }

}

function limpiarFolioInverso() {
    const items = document.querySelectorAll("#folio p")

    for (let i = items.length-1; i >= 0; i--) {
        items[i].remove()
    }
}


document.querySelector("#btn-tabla")
    .addEventListener("click", () => {
        const texto = document.querySelector("#numero_tabla").value
        pintaTabla(texto)
    })

document.querySelector("#reset")
    .addEventListener("click", limpiarFolioDirecto)

document.querySelector("#reset1")
    .addEventListener("click", limpiarFolioConConstante)

document.querySelector("#reset2")
    .addEventListener("click", limpiarFolioInverso)

