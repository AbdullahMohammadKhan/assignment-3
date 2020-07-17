function feetToMile(feet) {
  if (feet < 0) {
    return "feet cannot be a negative number";
  }
  var mile = feet / 5280;
  return mile;
}
console.log(feetToMile(0.1));

function woodCalculator(chairQuantity = 0, tableQuantity = 0, bedQuantity = 0) {
  const woodForChair = 1;
  const woodForTable = 3;
  const woodForBed = 5;

  var totalWoodNeeded =
    chairQuantity * woodForChair +
    tableQuantity * woodForTable +
    bedQuantity * woodForBed;

  return totalWoodNeeded;
}
console.log(woodCalculator(1, 1, 1));

function brickCalculator(noOfFloors) {
  if (noOfFloors < 0) {
    return "number fo floor cannot be a negative number";
  }
  var totalHeight = 0;
  var fllorHeight;
  const bricksForOneFloor = 1000;
  var i;
  for (i = 1; i <= noOfFloors; i++) {
    if (i <= 10) {
      floorHeight = 15;
    } else if ((i > 10) & (i < 21)) {
      floorHeight = 12;
    } else {
      floorHeight = 10;
    }
    totalHeight = totalHeight + floorHeight;
  }
  return bricksForOneFloor * totalHeight;
}

console.log(brickCalculator(3));

var arr = ["11111111111", "ajhkhjhjhjh", "aa", "aaa", "aaaa"];
function tinyFriends() {
  if (arr.length === 0) {
    console.log("array length cannot be null");
    return;
  }
  var tinyName = arr[0];
  var len = arr[0].length;
  for (var element of arr) {
    if (element.length < len) {
      len = element.length;
      tinyName = element;
    }
  }
  return tinyName;
}

console.log(tinyFriends(...arr));
