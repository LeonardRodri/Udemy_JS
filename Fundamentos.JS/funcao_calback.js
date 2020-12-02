function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => {
    console.log(x + y) 
}

const subtrairNoTerminal = (x, y) => {
    console.log(x - y) 
}

const subtrair = (x, y) => x - y

exec(somarNoTerminal, 1, 5)
exec(subtrairNoTerminal, 1, 5)

const r = exec(subtrair, 1, 1)
console.log(r)

const fn = () => console.log('Exec...')
setInterval(fn, 1000)