const request = require("supertest")
const app = require("./../api/app")

const requestPayload = {
    winner: null,
    turn: "x",
    last_turn: {
        team: "o",
        turn: "place",
        column: 0,
        row: 0,
    },
    field: [],
}

describe("CORE", () => {
    describe("POST /api", () => {
        test("Team secret should be in header", async () => {
            const response = await request(app)
                .post("/api")
                .send(requestPayload)

            expect(response.statusCode).toBe(200)
            expect(response.header["x-team-secret"]).toBe(
                process.env.TEAM_SECRET
            )
        })
    })

    describe("GET /api", () => {
        test("Should respond with 503 if not ready", async () => {
            process.env.READY = "false"

            const response = await request(app).get("/api")

            expect(response.statusCode).toBe(503)
        })

        test("Should respond with 200 if ready", async () => {
            process.env.READY = "true"

            const response = await request(app).get("/api")

            expect(response.statusCode).toBe(200)
        })
    })
})
