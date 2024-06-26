const http = require('node:http')

// commonJS --> módilos clásicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader = ('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1Z>404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon':
          const body = ''
            // ????
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
