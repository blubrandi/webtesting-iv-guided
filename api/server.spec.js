//supertest

const request = require('supertest')

const server = require('./server.js')

describe('server', () => {

    it('sets the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    //open client, make a request and inspect the response
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server).get('/').expect(200)
            //add return to turn on async testing
        })
    })
})