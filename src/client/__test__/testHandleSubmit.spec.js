// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
//const babelPolyfill = require('babel-polyfill')
import {
    handleSubmit
} from '../js/formHandler'

describe("handleSubmit", () => {
    //  test cases to test client
    it("handle submit must be defined", () => {
        // return handleSubmit().then(data =>{
        expect(handleSubmit).toBeDefined()
    })
});

