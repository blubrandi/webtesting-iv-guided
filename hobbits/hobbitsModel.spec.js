const db = require('../data/dbConfig.js')
const Hobbits = require('./hobbitsModel.js')

describe('Hobbits Model', () => {

    beforeAll(async () => {
        await db('hobbits').truncate()
    })

    describe('insert()', () => {
        it('should insert provided hobbit', async () => {
            await Hobbits.insert({ name: 'gaffer' })

            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(1)
        })
    })
})