const Person = require("../../classes/Person.js");
const Plane = require("../../classes/Plane.js");

describe("Testing Plane class", () => {
    let plane;
    let passenger;
    let passenger1;
    let passenger2;

    beforeEach(() => {
        plane = new Plane("Wizzair", "Madrid");
        passenger = new Person("Misha", "Madrid");
        passenger1 = new Person("Misha", "Kyiv");
        passenger2 = new Person("Masha", "Madrid");
    });

    test("can create an instance of Plane class", () => {
        expect(plane instanceof Plane).toBeTruthy();
    });
    test("correct company", () => {
        expect(plane.company).toBe("Wizzair");
    });
    test("correct destination", () => {
        expect(plane.destination).toBe("Madrid");
    });
    test("get passengers method", () => {
        expect(plane.getPassengers()).toEqual([]);
    });
    test("add passenger method with correct destination", () => {
        plane.addPassenger(passenger);
        expect(plane.getPassengers()).toEqual([passenger]);
    });
    test("add passenger method with wrong destination", () => {
        expect(() => plane.addPassenger(passenger1)).toThrow(
            "Wrong plane, check your destination"
        );
    });
    test("add passenger method with correct destination, second passenger", () => {
        plane.addPassenger(passenger);
        plane.addPassenger(passenger2);
        expect(plane.getPassengers()).toEqual([passenger, passenger2]);
    });
});
