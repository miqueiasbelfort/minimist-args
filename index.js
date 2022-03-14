const minimist = require("minimist")
const meuModulo = require("./soma")

// externo
const args = minimist(process.argv.slice(2))

//interno
const somaNum = meuModulo.soma

const a = parseInt(args["a"])
const b = parseInt(args["b"])

somaNum(a, b)
