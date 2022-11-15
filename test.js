class ErrorLog {
    static log(message) {
        console.log(message);
    }
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (...) { // Logic to determine whether or not the car should start
            ErrorLog.log(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }
}