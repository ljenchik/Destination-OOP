const Bag = require("../../classes/Bag.js");
const Person = require("../../classes/Person.js");

describe("Testing Bag class", () => {
    const bag = new Bag(500, 1);
    test("can create an instance of Bag class", () => {
        expect(bag instanceof Bag).toBeTruthy();
    });
    test("correct weight", () => {
        expect(bag.weight).toBe(500);
    });
    test("correct id", () => {
        expect(bag.id).toBe(1);
    });
    test("correct owner", () => {
        expect(bag.getOwner()).toBe(null);
    });
    test("assign owner", () => {
        const owner = new Person("Ann", "London");
        bag.assignOwner(owner);
        expect(bag.getOwner()).toEqual(owner);
    });
});
