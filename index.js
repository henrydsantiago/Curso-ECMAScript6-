
function newFunction (name, age, country){
    var name = name || 'Henry'
    var age  = age || 25
    var country = country || 'VE'
    console.log(name, age, country)
}

function newFunction2 (name = 'Henry', age = 25, country = 'VE'){
    console.log(name, age, country)
}

newFunction()
newFunction2()
newFunction2('Alexander', 24, 'CL')

let hello = 'Hello'
let world = 'world'
let epicFrase = hello + ' ' + world
console.log(epicFrase)
let epicFrase2 = `${hello} ${world}`
console.log(epicFrase2)

let lorem = `Este es un párrafo más largo,
que tiene varias lineas y no importa, 
porque con estas comillas igual sirve`
console.log(lorem)

let person = {
    'name' : 'Henry',
    'age' :25,
    'country': 'VE'
}

let {name, age, country} = person
console.log(name, country)

let team1 = ['Henry', 'Karína', 'Mauricio']
let team2 = ['David', 'Grey', 'Shary']
let education  = ['Hernan', ...team1, ...team2]
console.log(education)
let nombre = 'Henry'
let edad = 25
obj = {nombre, edad}
console.log(obj)

const names = [
    {name: 'Henry', age: 25},
    {name: 'Karina', age: 29}
]

let listOfNames = names.map(({name})=> console.log(name))


//PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!, Todo bien!')
        } else {
            reject('Ups!!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log('Error: ', error))

//Clases, Módulos y Generadores

class Calculator {
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sumar(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}
const calc = new Calculator()
console.log(calc.sumar(25,34))

// MODULOS IMPORT EXPORT
/* import { multiplicar } from './modulo' */
/* const multi = require('./modulo')
console.log(multi(5,5))  */


