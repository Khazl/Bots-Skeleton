"use strict"
const server = require("./app")

server.listen(process.env.SERVER_PORT, () => {
    console.log(
        `Server started. Go to http://localhost:${process.env.SERVER_PORT}/`
    )
})
