const http = require('node:http')
const fs = require('node:fs')

console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8') // Con este charset se pueden respetar los textos en españo

  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./mont.png', (err, data) => {
      if (err) {
        console.error('Error reading file:', err) // Log del error
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
