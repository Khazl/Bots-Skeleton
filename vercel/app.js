'use strict'

const app = (request, response) => {
    response.send(`Hello ${request.body.name}`)
}

module.exports = app
