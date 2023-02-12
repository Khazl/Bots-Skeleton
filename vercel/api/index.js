'use strict'

const express = require('express')
const cors = require('cors')
const server = express()
const app = require('./app')

/*
const allowedOrigins = ['https://example.com']
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Operation not allowed'))
        }
    }
}
*/

server.use(cors())
server.use(express.json())

server.post('/api', (request, response) => {
    app(request, response)
})

server.listen(3000,function () {
    console.log('Server started. Go to http://localhost:3000/')
})
