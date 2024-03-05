import { pipe } from "../src/pipe";
import { expect } from 'chai';

//TODO: FUNCTIONs only for testing for now
const addOne = (n) => n + 1;
const mulByTwo = (n) => n * 2;

describe("pipe function tests", () => {
    it("Test 1: should return the input value plus one => 6", () => {
        const result = pipe(addOne)(5);
        expect(result).to.equal(6);
    });

    it("Test 2: should return the input value plus one multiplied by two => 12", () => {
      const result = pipe(addOne, mulByTwo)(5);
      expect(result).to.equal(12);
    });

    it("Test 3.1: should return the input value multiplied by two, then added one, and then multiplied by two again => 22", () => {
      const result = pipe(mulByTwo, addOne, mulByTwo)(5);
      expect(result).to.equal(22);
    });

    it("Test 3.1: should return the input value multiplied by two, then added one => 201", () => {
        const result = pipe(mulByTwo, addOne)(100);
        expect(result).to.equal(201);
      });

    it("Test 4.1: should return an error message if no arguments are provided", () => {
        expect(() => {
            const result = pipe();
          }).to.throw(Error, "❌ The \"pipe\" function expects at least one argument! Please 'pass' the correct number of arguments");
    });

    it("Test 4.2: should return an error message if non-function arguments are provided", () => {
      expect(() => {
        const result = pipe(addOne, 5);
      }).to.throw(Error, "❌ The \"pipe\" function takes only functions as arguments");
    });
});