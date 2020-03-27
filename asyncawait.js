const hello = ()=>{
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=> resolve('Hello World!!!'), 3000)
        : reject(new Error('Hubo un puto error en la promesa'))
    })
}

const asynWorld = async () =>{
    try {
        const world = await hello()
        console.log(world)
    } catch (error) {
        console.log('Error: ', error)
    }
}

asynWorld()

// ES9


const obj = {
    name: 'Henry',
    age: 25,
}

const obj1 = {
    country: 'VE'
}

const obj3 = {...obj, ...obj1}
console.log('obj3: ', obj3)

const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(()=> resolve('Hola con timeout'), 3000)
    : reject(new Error('Problema en la promesa'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-05')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(day, '/', month,'/', year)