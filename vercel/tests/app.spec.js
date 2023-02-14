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

describe("POST /api", () => {
    test("If first turn, place mark in the middle", async () => {
        requestPayload.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
        const response = await request(app).post("/api").send(requestPayload)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            turn: "place",
            column: 1,
            row: 1,
        })
    })

    test("If it is not the first turn, skip the round", async () => {
        requestPayload.field = [
            [null, null, null],
            [null, "x", null],
            [null, null, null],
        ]
        const response = await request(app).post("/api").send(requestPayload)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            turn: "skip",
        })
    })
})
