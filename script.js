// // Complete the js code

// function Car(make, model) {
// make = this.make;
// 	model = this.model;
// }
// Car.prototype.getMakeModel = function () {
//   return this.make + ' ' + this.model;
// };

// function SportsCar(make, model, topSpeed) {
// 	car.call(this,topSpeed)
// this.topSpeed = topSpeed;
// }
// SportsCar.prototype=Object.create(Car.prototype);
// SportsCar.prototype.constructor = SportsCar;

// // Add a method to the SportsCar prototype
// SportsCar.prototype.getTopSpeed = function () {
//   return this.topSpeed;
// };



function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + ' ' + this.model;
};

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);

  // Additional property for SportsCar
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
