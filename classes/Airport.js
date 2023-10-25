class Airport {
    static airportCode = "LND";
    constructor(name) {
        this.name = name;
        this.planes = [];
    }
    getPlanes() {
        return this.planes;
    }
    addPlane(plane) {
        this.planes.push(plane);
    }
}

module.exports = Airport;

/*

In Airport.test.js, import the Airport class from Airport.js that has been created for you.

In Airport.test.js, construct the tests that will verify that you have included all of 
the required components outlined in the class diagram above. A few to consider using:

Test that name and planes are assigned to the correct value.
Test that airportCode is the correct value
Check that the planes array initializes as an empty array.
Verify that you can add Plane objects to the planes array using addPlane.
In Plane.js, create code that meets the following specifications:
Properties
name: The name of the Airport.
airportCode: A static property with the three letter code for the airport (e.g. JFK or LHR).
planes: An array of Plane objects currently at the airport. Initializes as an empty array.
Methods
getPlanes(): Returns the array of planes.
addPlane(plane): Adds the plane to the planes array.

*/
