import isUrlValid from '../js/checkURL'
window.alert = jest.fn();

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(isUrlValid).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
      let input = "w.ww.washingtonpo st.com";
      var valid =isUrlValid(input);
      expect(valid).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        let inputB = "www.washingtonpost.com";
        var validB =isUrlValid(inputB);  
        expect(validB).toBe(true)
    })
})
