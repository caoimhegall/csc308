const greet = require('./greeting.js');

describe('Greeting', () => {
    it('Tests the greeting', () => {
      expect(greet("Tom")).toEqual("Hello, Tom");
      expect(greet("Sally")).toEqual("Hello, Sally");
    });
  });

  describe('Null greeting', () => {
    it('Tests the greeting with null', () => {
      expect(greet("")).toEqual("Hello, my friend");
    });
  });

  describe('Shouting', () => {
    it('Tests the shouting greeting', () => {
      expect(greet("JERRY")).toEqual("HELLO JERRY!");
    });
  });