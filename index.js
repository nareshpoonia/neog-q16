var objectOne = {
  name: "Ram",
  age: "Treta",
  power: 2500,
};

var objectTwo = {
  name: "Krishna",
  age: "Dwapar",
  power: 2325,
};

function returnPowerful(objectOne, objectTwo) {
  var namePower = checkPower(objectOne, objectTwo);
  var powerNumber = [objectOne.power, objectTwo.power];
  var cummulativePower = [
    namePower[0] + powerNumber[0],
    namePower[1] + powerNumber[1],
  ];
  if (cummulativePower[0] > cummulativePower[1]) {
    return objectOne.name;
  } else return objectTwo.name;
}

function checkPower(objectOne, objectTwo) {
  return [objectOne.name.length * 35, objectTwo.name.length * 35];
}

returnPowerful(objectOne, objectTwo);

console.log(returnPowerful(objectOne, objectTwo));
