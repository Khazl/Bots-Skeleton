"use strict"
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const server = express()

server.use(cors())
server.use(express.json())

server.get("/api/ready", (request, response) => {
    if (process.env.READY === "true") {
        response.status(200).send("OK")
    } else {
        response.status(503).send("NO")
    }
})

server.post("/api", (request, response) => {
    response.setHeader("Content-Type", "application/json")
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
    response.setHeader("X-Team-Secret", process.env.TEAM_SECRET)

    // TODO: Your logic ...
    if (allFieldsEmpty(request.body.field)) {
        response.json({
            turn: "place",
            column: 1,
            row: 1,
        })
    } else {
        response.json({ turn: "skip" })
    }
})

const allFieldsEmpty = (fields) => {
    let result = true
    fields.forEach((row) => {
        row.forEach((column) => {
            if (column !== null) {
                result = false
            }
        })
    })

    return result
}

module.exports = server
