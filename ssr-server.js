const express = require('express')
const next = require('next')
const cookiesMiddleware = require('universal-cookie-express')

const port = process.env.PORT || 8080
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()
  server.get(
    /^\/(images)\//,
    (req, res) => {
      res.setHeader(
        'Cache-Control',
        'public,max-age=31536000',
      )
      return handle(req, res)
    },
  )
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8080')
  })
  server.use(cookiesMiddleware())
  server.get('*', (req, res) => handle(req, res))
  server.use(handle)
  await server.listen(port)
})()
