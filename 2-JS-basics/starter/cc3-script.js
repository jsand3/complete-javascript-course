/*

20% Tip bill < 50
15% Tip bill < 200
10% Tip bill > 200

.2 * 50

array with the tip amonts for each bill

array with total bill (bill + tip)

*/
var restaurants = [124, 48, 268];

// calculate the tips

var tips = [];

var calculateTip = function(bill) {
  if (bill) {console.log(bill < 50);}

  if (bill < 50) {
    tipPercent = .2;
    tip = tipPercent * bill;
    // console.log(tip, tipPercent);
    return tip;
  } else if (bill >= 50 && bill < 200) {
      tipPercent = .15;
      tip = tipPercent * bill;
      // console.log(tip, tipPercent);
      return tip;
  } else {
      tipPercent = .1;
      tip = tipPercent * bill;
      // console.log(tip, tipPercent);
      return tip;
  }

}
var calcTotalBill = function(tip, bill) {
  totalBill = tip + bill;
  console.log(bill + tip);
  // console.log(tip, bill, totalBill);
  return totalBill;
}

var firstMeal = calculateTip(restaurants[0]);
var secondMeal = calculateTip(restaurants[1]);
var thirdMeal = calculateTip(restaurants[2]);
tips.push(firstMeal.toFixed(2));
tips.push(secondMeal.toFixed(2));
tips.push(thirdMeal.toFixed(2));
console.log(tips);

// totalBill array
var firstBill = calcTotalBill(firstMeal, restaurants[0]);
var secondBill = calcTotalBill(secondMeal, restaurants[1]);
var thirdBill = calcTotalBill(thirdMeal, restaurants[2]);

totalBills = [];
totalBills.push(firstBill.toFixed(2));
totalBills.push(secondBill.toFixed(2));
totalBills.push(thirdBill.toFixed(2));
console.log(totalBills);
