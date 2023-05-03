// class matematica {
//     numero1
//     numero2

//     constructor(numero1Usuario, numero2Usuario){
//         this.numero1 = numero1Usuario
//         this.numero2 = numero2Usuario
//     }


//     suma(){
//         return this.numero1 + this.numero2
//     }

//     resta(){
//         return this.numero1 - this.numero2

//     }

//     division(){
//         return this.numero1 / this.numero2

//     }

//     multiplicacion(){
//         return this.numero1 * this.numero2

//     }

// }

// let obj_operacionOperacion = new matematica(5,8)


const promesa = new Promise((resolve, reject) => {

    let n = 3

    if (n  %2 == 0){
        return resolve ({res: "es par"})
    
    }else{
        return reject ( {res:"es impar"})
    }
})

promesa
.then ((data) => {
    console.log(data)
})
.catch ((error) => {
    console.log(error)
})