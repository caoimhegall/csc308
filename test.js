const {greet} = require('./greeting.js');

//Requirement 1
describe('Greeting', () => {
    it('Tests the greeting', () => {
      expect(greet("Tom")).toEqual("Hello, Tom.");
      expect(greet("Sally")).toEqual("Hello, Sally.");
    });
  });

  //Requirement 2
  describe('Null greeting', () => {
    it('Tests the greeting with null', () => {
      expect(greet("")).toEqual("Hello, my friend.");
    });
  });

  //Requirement 3
  describe('Shouting', () => {
    it('Tests the shouting greeting', () => {
      expect(greet("JERRY")).toEqual("HELLO JERRY!");
      expect(greet("SAMUEL")).toEqual("HELLO SAMUEL!");
    });
  });

  //Requirement 4
  describe('Two people', () => {
    it('Tests greeting with two people', () => {
      expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.");
      
    });
  });

  //Requirement 5
  describe('Oxford comma', () => {
    it('Tests greeting with more than 2 people', () => {
      expect(greet(["Amy", "Brian", "Charlotte"])).toEqual("Hello, Amy, Brian, and Charlotte.");
      expect(greet(["Jack", "Jill", "Jane"])).toEqual("Hello, Jack, Jill, and Jane.");
      
    });
  });


 //Requirement 7
 describe('String containing comma', () => {
    it('Tests greeting with string split with a comma', () => {
      expect(greet(["Bob", "Charlie, Dianne"])).toEqual("Hello, Bob, Charlie, and Dianne.");
      
    });
  });

  //Requirement 8
  describe('Escape intentional commas', () => {
    it('Tests greeting with string escaped commas', () => {
      expect(greet(["Bob", "\"Charlie, Dianne\""])).toEqual("Hello, Bob and Charlie, Dianne.");
      
    });
  });