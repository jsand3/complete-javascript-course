/*
 John's Family $124 48 268 180 42
20% < 50
15% > 50 <= 200
10% > 200
*/
// var lengthOf = familyMealsJohn.bills;
var arrayTip = []; //
var arrayTotalCost = [];
var familyMealsJohn = {

  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    for (var i = 0; i < familyMealsJohn.bills.length; i++) {
      var bill = familyMealsJohn.bills[i];
      var tipPercentage = .2;
      var tipAmount = '';
      var totalCost = '';

      if (bill < 50) {
          tipAmount = bill * tipPercentage;

      } else if (bill >= 50 && bill < 200 ) {
        tipAmount = .15;
        tipAmount = bill * tipPercentage;

      } else {
        tipAmount = .1;
        tipAmount = bill * tipPercentage;

      }
      console.log(tipAmount);
      totalCost = tipAmount + bill;

      console.log(totalCost);
      arrayTip[i] = tipAmount;
      arrayTotalCost[i] = totalCost;
      // arrayTip.push(tipAmount);
      // arrayTotalCost.push(totalCost);

    }
    console.log("Tip Array");
    console.log(arrayTip);

    console.log("Total Cost Array");
    console.log(arrayTip);
  }

}
familyMealsJohn.calcTip();

/*
*
*
*/
var arrayTip = []; //
var arrayTotalCost = [];
var familyMealsJohn = {

  bills: [77, 375, 110, 45],
  calcTip: function() {
    for (var i = 0; i < familyMealsJohn.bills.length; i++) {
      var bill = familyMealsJohn.bills[i];
      var tipPercentage = .2;
      var tipAmount = '';
      var totalCost = '';

      if (bill < 100) {
          tipAmount = bill * tipPercentage;

      } else if (bill >= 100 && bill < 300 ) {
        tipAmount = .1;
        tipAmount = bill * tipPercentage;

      } else {
        tipAmount = .25;
        tipAmount = bill * tipPercentage;

      }
      console.log(tipAmount);
      totalCost = tipAmount + bill;

      console.log(totalCost);
      arrayTip[i] = tipAmount;
      arrayTotalCost[i] = totalCost;
      // arrayTip.push(tipAmount);
      // arrayTotalCost.push(totalCost);

    }
    console.log("Tip Array");
    console.log(arrayTip);

    console.log("Total Cost Array");
    console.log(arrayTip);
  }

}
familyMealsJohn.calcTip();
