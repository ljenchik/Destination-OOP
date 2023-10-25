const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

describe("Testing Person class", () => {
    const person = new Person("John", "Paris");
    test("can create an instance of Person class", () => {
        expect(person instanceof Person).toBeTruthy();
    });
    test("correct name", () => {
        expect(person.name).toBe("John");
    });
    test("correct destination", () => {
        expect(person.destination).toBe("Paris");
    });
    test("adding bag", () => {
        const bag = new Bag(1000, 2);
        person.addBag(bag);
        expect(person.getBags()).toEqual([bag]);
    });
});
