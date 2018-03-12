const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))
app.use(express.static('./'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/push-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'push-worker_.js'))
})

app.post('/channel/:channel', (req, res) => {
  if (req.params && req.params.channel) {
    console.log('channelID:', req.params.channel)
  }
  res.send()
})

app.listen(3010, () => console.log('push notifications working!!!!'))
