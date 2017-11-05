const numbers = process.argv.slice(2)

const sum = numbers
    .map(n => Number(n))
    .reduce((prev, next) => prev + next)
    
console.log(sum)
