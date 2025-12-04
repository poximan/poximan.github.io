const http = require('http')
const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'client', 'dist')
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

const sendResponse = async (filePath, req, res) => {
  const data = await fs.promises.readFile(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const headers = {
    'Content-Type': mimeTypes[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000'
  }

  res.writeHead(200, headers)
  if (req.method === 'HEAD') {
    res.end()
    return
  }
  res.end(data)
}

const fallbackToIndex = (req, res) =>
  sendResponse(path.join(distDir, 'index.html'), req, res)

const handleRequest = async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' })
    res.end('Method Not Allowed')
    return
  }

  if (!fs.existsSync(distDir)) {
    res.writeHead(503, { 'Content-Type': 'text/plain' })
    res.end('La aplicacion aun no fue construida. Ejecuta "npm run build" antes de iniciar el servidor.')
    return
  }

  let requestPath = req.url.split('?')[0]
  try {
    requestPath = decodeURIComponent(requestPath)
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.end('Bad Request')
    return
  }

  let relativePath = requestPath === '/' ? '/index.html' : requestPath
  let filePath = path.normalize(path.join(distDir, relativePath))

  if (!filePath.startsWith(distDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' })
    res.end('Forbidden')
    return
  }

  try {
    const stats = await fs.promises.stat(filePath)
    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html')
    }
    await sendResponse(filePath, req, res)
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fallbackToIndex(req, res)
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError)
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Internal Server Error')
      }
      return
    }

    console.error('Server error:', error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
}

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    console.error('Unexpected error:', error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  })
})

server.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`)
})
