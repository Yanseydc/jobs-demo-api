const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return a friendly root response', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: 'jobs-demo-api running',
            health: '/health'
        });
    });
});

describe('GET /health', () => {
    it('should return 200 and service status', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            ok: true,
            service: 'jobs-demo-api'
        });
    });
});
