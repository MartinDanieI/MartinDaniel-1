// let dia_actual = prompt("¿En que dia de la semana estas?")


// if(dia_actual == "lunes"){
//     console.log ("Hoy puedes comer pizza")
// }else if(dia_actual =="martes"){
//     console.log ("Hoy puedes comer arroz con pollo")
// }else if(dia_actual == "miércoles"){
//     console.log ("Hoy puedes comer tacos")
// }else if(dia_actual == "jueves"){
//     console.log ("Hoy puedes comer hamburguesa")
// }else if(dia_actual == "viernes"){
//     console.log ("Hoy puedes comer carne a la plancha")
// }else{
//     console.log("Es fin de semana, como lo que quieras")
// }

// let imagenUsuario = prompt ("Ingrese la url")
// let imagenPorDefecto = "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg"
// let imagenHTML = document.querySelector("#imagen")
// if(imagenUsuario !="" ){
//     imagenHTML.src = imagenUsuario
// }else{
//     alert("Ingrese la URL")
//     imagenHTML.src = imagenPorDefecto
// }

// function verificarUsuario() {

//     let usuarioValido = "pepe"
//     let passCorrecto = "contraseña123"

//     let inputUsuario = document.getElementById("inputUser")
//     let inputPassword = document.getElementById("inputPass")


//     if (inputUsuario.value == usuarioValido) {
//         if (inputPassword.value == passCorrecto){
//             alert ("Bienvenido 😁")
//         }else{
//             alert ("Su contraseña es incorrecta 😂")
//         }
//     }else{
//         alert ("Su usuario es incorrecto 😂")
//     }
// }

// //CICLOS FOR

// for (let x = 1; x <= 100; x++) {
//     console.log(x);    
// }

// //CICLOS WHITE

// let i =1
// while (i <= 20) {
//     console.error (i)
//     i++
// }

// //CICLOS DO WHITE
// let t= 1

// do {
//     console.warn (t)
//     t++
// } while (t <= 30);


function generarLineaCuadricula() {
    let numeroUsuario = document.querySelector("#numeroRecuadros")
    let recuadrosDiv = document.querySelector("#recuadros")
    for (let cuadro = 1; cuadro <= numeroUsuario.value; cuadro++){
        console.log(cuadro)
        if (cuadro % 2 == 0){
            recuadrosDiv.innerHTML += `<div class="cuadro negro">${cuadro}</div>`
        }else{
            recuadrosDiv.innerHTML += `<div class="cuadro blanco">${cuadro}</div>`
        }
    }
}