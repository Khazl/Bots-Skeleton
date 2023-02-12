'use strict'
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())

server.post('/api', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    response.setHeader('X-Team-Secret', process.env.TEAM_SECRET);

    // TODO: Your logic ...
    response.send(`Hello ${request.body.name}`)
})

module.exports = server
