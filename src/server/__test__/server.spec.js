// to solve ReferenceError: regeneratorRuntime is not defined

import 'babel-polyfill'
import { message } from '../mockAPI';
const app = require("../index");
const supertest= require("supertest");
const request = supertest(app);

describe('Server Test', () => {
  // I used the test code from the site https://www.freecodecamp.org/news/end-point-testing/
  
  it('test the endPoint', async done => {
    const response = await request.get("/test");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(message);
    done();
  })
})