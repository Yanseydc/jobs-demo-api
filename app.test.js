const request = require('supertest');
const app = require('./app');

describe('GET /health', () => {
    it('should return 200 and service status', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({
            ok: true,
            service: 'jobs-demo-api'
        })
    });
})
