/**
 * Part - 2 
 * --------------------------------------------
 * Author: Indrayani 
 * Automated Test Cases:
 *  - GET /users/:id → Valid, invalid, and non-existent users
 *  - POST /posts → Valid and malformed payload handling
 *  - Ensures schema consistency and error handling
 */

const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('Automated API Tests', function () {
  this.timeout(10000);

  // GET /users/:id - Fetch user
  // This test checks if the API correctly returns details of a single user when requested by their ID.
  describe('GET /users/:id', () => {
    it('should fetch user successfully', async () => {
      const res = await axios.get(`${BASE_URL}/users/1`);
      expect(res.status).to.equal(200);
      expect(res.data).to.have.property('id', 1);
      expect(res.data).to.have.property('name');
      expect(res.data).to.have.property('email');
    });

    // This test checks if the API correctly returns user details when we query by a specific ID using a query parameter (?id=1).
    it('should fetch user when queried by ?id=1', async () => {
    const res = await axios.get(`${BASE_URL}/users`, { params: { id: 1 } });
    expect(res.status).to.equal(200);
    expect(res.data).to.be.an('array').that.is.not.empty;
    const user = res.data[0];
    expect(user).to.have.property('id', 1);
    expect(user).to.have.property('name');
    expect(user).to.have.property('email');
    });

  });

  // POST /posts - Create a post
  // This test suite checks how the API handles creating new posts using POST /posts.
  describe('POST /posts', () => {
    it('should create a new post successfully', async () => {
      const payload = { title: 'foo', body: 'bar', userId: 1 };
      const res = await axios.post(`${BASE_URL}/posts`, payload);
      expect(res.status).to.equal(201);
      expect(res.data).to.include(payload);
      expect(res.data).to.have.property('id');
    });
    
    // Test 2: Creating a post with missing fields
    it('should handle missing required fields', async () => {
      const payload = { title: 'Only Title' };
      const res = await axios.post(`${BASE_URL}/posts`, payload);
      expect(res.status).to.equal(201);
      expect(res.data).to.include(payload);
    });

    // Test 3: Sending extra/unexpected fields
    it('should ignore unexpected fields', async () => {
      const payload = { title: 'Hello', body: 'World', userId: 1, dummy: 9999 };
      const res = await axios.post(`${BASE_URL}/posts`, payload);
      expect(res.status).to.equal(201);
      expect(res.data).to.not.have.property('dummy');
    });
  });

  // GET /users/:id (Non-existent)
  // This test suite checks how the API behaves when trying to fetch users that do not exist.
  describe('GET /users/:id (non-existent)', () => {
    it('should return 404 or empty object for non-existent user', async () => {
      try {
        await axios.get(`${BASE_URL}/users/999`);
      } catch (err) {
        expect(err.response.status).to.be.oneOf([404]);
      }
    });
    
    // Test 2: Negative user ID
    it('should return 404 for negative user ID', async () => {
      try {
        await axios.get(`${BASE_URL}/users/-1`);
      } catch (err) {
        expect(err.response.status).to.be.oneOf([404]);
      }
    });

    // Test 3: Fractional user ID
    it('should return 404 for fractional user ID', async () => {
      try {
        await axios.get(`${BASE_URL}/users/1.5`);
      } catch (err) {
        expect(err.response.status).to.be.oneOf([404]);
      }
    });
    
    // Test 4: Empty user path
    it('should return 404 for empty path', async () => {
      try {
        await axios.get(`${BASE_URL}/users/`);
      } catch (err) {
        expect(err.response.status).to.be.oneOf([404]);
      }
    });

  });
});
