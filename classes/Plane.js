const Airport = require("./Airport.js");

class Plane {
    constructor(company, destination) {
        this.company = company;
        this.origin = Airport.airportCode;
        this.destination = destination;
        this.passengers = [];
    }
    getPassengers() {
        return this.passengers;
    }
    addPassenger(passenger) {
        if (passenger.destination === this.destination) {
            this.passengers.push(passenger);
        } else {
            throw new Error("Wrong plane, check your destination");
        }
    }
}

module.exports = Plane;
