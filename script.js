// Complete the js code

function Car(make, model) {
make = this.make;
	model = this.model;
}
Car.prototype.getMakeModel = function () {
  return this.make + ' ' + this.model;
};

function SportsCar(make, model, topSpeed) {
	car.call(this,topSpeed)
this.topSpeed = topSpeed;
}
SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
