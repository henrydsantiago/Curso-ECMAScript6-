const data = {
    frontend: 'Henry',
    backend: 'Karina',
    design: 'Grey'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


const values = Object.values(data)
console.log(values)

const str = 'Hello' 
console.log(str.padStart(15, 'asdf'))
console.log(str.padEnd(7, '----'))
console.log(str.padEnd(21, '--'))
console.log('Cauchos'.padEnd(21, '--'))
console.log('Tornillos'.padEnd(21, '--'))
console.log('Gomas'.padEnd(21, '--'))
console.log('Martillo'.padEnd(21, '--'))
console.log('Otros repuestos'.padEnd(21, '--'))

