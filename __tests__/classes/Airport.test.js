const Plane = require("../../classes/Plane.js");
const Airport = require("../../classes/Airport.js");

describe("Testing Airport class", () => {
    const airport = new Airport("London");
    test("can create an instance of Airport class", () => {
        expect(airport instanceof Airport).toBeTruthy();
    });
    test("correct airport name", () => {
        expect(airport.name).toBe("London");
    });
    test("get planes", () => {
        expect(airport.getPlanes()).toEqual([]);
    });
    test("correct airport code", () => {
        expect(Airport.airportCode).toBe("LND");
    });
    test("add plane", () => {
        const plane = new Plane("Wizzair", "Madrid");
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
    });
});
