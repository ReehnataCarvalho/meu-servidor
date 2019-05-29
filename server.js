const http = require('http')

const servidor = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end('hello wonderful word!')
    } else if (request.url === '/comidas') {
        // response.end('Resposta diferente')

        if (request.method === 'GET') {
            response.writeHead(200, {// escreve no cabeçalho .. é a mesma resposta que aparece no postman para saber se bateu na porta certa
                "Content-Type": "text/html; charset=utf-8"
            })
            response.end("<h1>Música 2 da Adele que a Nilce esta escrevendo GET</h1>")
        } else if (request.method === 'POST') {
            response.writeHead(201, {// escreve no cabeçalho .. é a mesma resposta que aparece no postman para saber se bateu na porta certa
                "Content-Type": "text/html; charset=utf-8"
            })
            response.end("<h1>Música da Nilce que a Adele esta escrevendo POST</h1>")

        }
    }

})

servidor.listen(3000)
console.log('servidor rodando na porta 3000')
