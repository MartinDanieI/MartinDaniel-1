mostrarNotas()

function guardarNota() {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#NotaUsuario")
    if (tituloNota.value == '' || textoNota.value == '') {
        disparaAlerta("Diligencie todos los campos del formulario", "info", "#fc6500", "#0026ff")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    } else {
        let cantidadNotasActuales = 1
        if (localStorage.getItem("cantidad") == null) {
            localStorage.setItem("cantidad", cantidadNotasActuales)
        } else {
            cantidadNotasActuales = localStorage.getItem("cantidad")
            cantidadNotasActuales = parseInt(cantidadNotasActuales) + 1
            localStorage.setItem("cantidad", cantidadNotasActuales)
        }
        
        

        localStorage.setItem(`titulo${cantidadNotasActuales}`, tituloNota.value)
        localStorage.setItem(`nota${cantidadNotasActuales}`, textoNota.value)
        tituloNota.classList.remove("border", "border-danger")
        textoNota.classList.remove("border", "border-danger")
        tituloNota.value = ''
        textoNota.value = ''
        mostrarNotas()
    }
}

function mostrarNotas() {
    let cantidadNotasActuales = localStorage.getItem("cantidad")
    let divNotas = document.querySelector("#notasGuardadas")
    if (cantidadNotasActuales == null) {
        divNotas.innerHTML = "<h1>No hay ninguna nota</h1>"
    } else {
        divNotas.innerHTML = ''
        for (let x = 1; x <= cantidadNotasActuales; x++) {
            if (localStorage.getItem(`titulo${x}`) != null) {
                let tituloNota = localStorage.getItem(`titulo${x}`)
                let nota = localStorage.getItem(`nota${x}`)
                divNotas.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${tituloNota}</h5>
                        <p class="card-text">${nota}</p>
                        <div class="d-flex justify-content-end align-items-center">
                            <button onclick="editarNota(${x})" class="btn btn-warning mx-2">Editar</button>
                            <button onclick="eliminarNota(${x})" class="btn btn-danger mx-2">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
            }
        }
    }
}

function eliminarNota(idNota) {
    localStorage.removeItem(`titulo${idNota}`)
    localStorage.removeItem(`nota${idNota}`)
    mostrarNotas()
}


function editarNota(idNota) {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#NotaUsuario")
    tituloNota.value = localStorage.getItem(`titulo${idNota}`)
    textoNota.value = localStorage.getItem(`nota${idNota}`)
    document.querySelector("#btnFormulario").removeAttribute("onclick")
    document.querySelector("#btnFormulario").innerHTML = "Editar nota"
    document.querySelector("#btnFormulario").setAttribute("onclick", `guardarCambiosNota(${idNota})`)
    console.log(idNota)
}

function guardarCambiosNota(idNotaEditar) {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#NotaUsuario")
    if (tituloNota.value != "" && textoNota.value != "") {
        localStorage.setItem(`titulo${idNotaEditar}`, tituloNota.value)
        localStorage.setItem(`nota${idNotaEditar}`, textoNota.value)
        mostrarNotas()
        document.querySelector("#btnFormulario").removeAttribute("onclick")
        document.querySelector("#btnFormulario").innerHTML = "Guardar nota"
        document.querySelector("#btnFormulario").setAttribute("onclick", `guardarNota()`)
        tituloNota.value = ""
        textoNota.value = ""
    }else{
        disparaAlerta("Por favor diligencie todos los campos del formulario", "warning", "#ff5618", "#000")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    }
}


function disparaAlerta(mensajeDelaAlerta, icono, colorIcono, colorTexto) {
    Swal.fire({
        icon: icono,
        title: mensajeDelaAlerta,
        iconColor: colorIcono,
        color: colorTexto,
    })
}

mostrarNotas()
