const { performance } = require('perf_hooks');
const lambdaFunc = require('../src/index')
const event = require('./event.json')

async function main() {
    const start = performance.now() 

    console.log('Iniciando execução...');
    const response = await lambdaFunc.handler(event)
    
    const end = performance.now()
    console.log(JSON.stringify(response, null, 2))

    const total = (end - start) / 1000
    console.log(`Tempo de execução: ${total.toFixed(3)} segundos`);
}

main()