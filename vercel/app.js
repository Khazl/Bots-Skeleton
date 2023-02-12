'use strict'

const app = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    response.send(`Hello ${request.body.name}`)
}

module.exports = app
