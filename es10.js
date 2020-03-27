//flat
let arreglo = [1, 2, 3, [4, 5, 6,[7, 8, 9]]]

console.log('arreglo', arreglo)
console.log(arreglo.flat(2))


let obj = {array: [1, 2, 3, [4, 5, 6,[7, 8, 9]]]}
console.log(obj.array.flat(3))

let array2 = [1,2,3,4,5]
console.log(arreglo.flatMap(value => [value*2]))

//trimStart trimEnd
let hello = '      hello world      '
console.log(hello)
console.log(hello.trimEnd())
console.log(hello.trimStart())

//entries

let entries = [["name", "Henry"], ["age", 25]]
console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol es10`
let symbol = Symbol(mySymbol)
console.log(symbol.description)

function crearObjeto(){
    var obj = {}
    var id = 'identificador'
    obj[id] = 0
    
    return {
        setId(valor){
            obj[id]= valor
        },
        getId(){
            return obj[id]
        },
        get(){
            return obj
        }
    }
}

var x = crearObjeto()
var objeto = x.get()
console.log(objeto)
x.setId(25)
console.log(objeto)