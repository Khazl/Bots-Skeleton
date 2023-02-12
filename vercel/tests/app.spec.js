const request = require('supertest')
const app = require('./../api/app')

describe('POST /api', () => {

    test('Team secret should be in header', async () => {
        const response = await request(app).post('/api')

        expect(response.statusCode).toBe(200);
        expect(response.header['x-team-secret']).toBe(process.env.TEAM_SECRET);
    })

    test('Should response with Hello Bob', async () => {
        const name = 'Bob'
        const response = await request(app).post('/api').send({'name': name})

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(`Hello ${name}`);
    })

})
