function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  }
}
// console.log(getNewCar());

function addCar(cars, newCar) {
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length;
}

// console.log(addCar(cars, getNewCar()));

function pickUpPassenger(car) {
  car['passengers'] ++;
  car['gas'] -= 10;
  return "Picked up passenger. Car now has " + car['passengers'] + " passengers. " ;
}
// console.log(pickUpPassenger(cars[0]));
// console.log(pickUpPassenger(cars[0]));

function getDestination(car) {
  if (car['city'] === 'Toronto'){
    return 'Mississauga';
  }
  else if (car['city'] === 'Mississauga'){
    return 'London';
  }
  else if (car['city'] === 'London'){
    return 'Toronto';
  }

}

// console.log(getDestination(cars[0]));

function fillUpGas(car) {
  var oldGas = car['gas'];
  car['gas'] = 100;
  return 'Filled up to ' + getGasDisplay(car['gas']) + ' on gas from ' + getGasDisplay(oldGas);
}

// function getGasDisplay(gasAmount) {
//   return gasAmount + '%';
// }
getGasDisplay = gasAmount => gasAmount + '%'

// console.log(fillUpGas(cars[0]));

function drive(car, cityDistance) {
  if (car['gas'] < cityDistance){
    return fillUpGas(car);
  }
  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return 'Drove to ' + car['city'] + '. Remaining gas: ' + getGasDisplay(car['gas']) + '.';
}
// console.log(drive(cars[0], 50));

function dropOffPassengers(car) {
  var previousPassengers = car['passengers'];
  car['passengers'] = 0
  return `Dropped off ${previousPassengers} passengers.`;
}
// console.log(cars);
// console.log(dropOffPassengers(cars[0]));

function act(car) {
  var distanceBetweenCities = 50;
  if (car['gas'] < 20){
    return fillUpGas(car);
  }
  else if (car['passengers'] < 3){
    return pickUpPassenger(car);
  }
  else {
    if (car['gas'] < distanceBetweenCities){
      return fillUpGas(car);
    }
    // console.log("drove to" + droveTo);
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + " " +  passengersDropped;
  }
}
// console.log(act(cars[0]));

commandFleet = cars => {
  cars.forEach(function functionName(car, index) {
    var action = act(car);
    var carNumber = index + 1;
    console.log("Car " + carNumber + ': ' + action);
  })
  console.log('---');
}
// console.log(commandFleet(cars));

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars)
  }
}
var cars = [];
addOneCarPerDay(cars, 10)
