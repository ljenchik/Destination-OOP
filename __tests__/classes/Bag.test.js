const Bag = require("../../classes/Bag.js");

describe("Testing Bag class", () => {
    const bag = new Bag();
    test("can create an instance of Bag class", () => {
        expect(bag instanceof Bag).toBeTruthy();
    });
});
