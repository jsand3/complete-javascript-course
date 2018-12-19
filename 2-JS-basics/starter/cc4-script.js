var john = {
  fullName: "John Smith",
  height: 150,
  mass: 100,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: "Mark Jethro",
  height: 140,
  mass: 100,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};


console.log("before",john);
john.calcBmi();
console.log("after",john['bmi']);

console.log("before",mark);
mark.calcBmi();
console.log("after",mark['bmi']);

var whosBmiIsGreater = '';

if (john.bmi > mark.bmi){
  console.log("John's BMI ( " + john.bmi + " ) is greater than Mark's (" + mark.bmi + " )");
} else if (john.bmi < mark.bmi) {
  console.log("John's BMI ( " + john.bmi + " ) is less than Mark's (" + mark.bmi + " )");
} else {
  console.log("John's BMI ( " + john.bmi + " ) is the same as Mark's (" + mark.bmi + " )");
}


/* Instructors way. calculate the bmi's and create the if statement in one line. The else if does not need the calcs because the numbers have already been calculate
if (john.calcBmi() > mark.calcBmibmi() ){
  console.log("John's BMI ( " + john.bmi + " ) is greater than Mark's (" + mark.bmi + " )");
} else if (john.bmi < mark.bmi) {
  console.log("John's BMI ( " + john.bmi + " ) is less than Mark's (" + mark.bmi + " )");
} else {
  console.log("John's BMI ( " + john.bmi + " ) is the same as Mark's (" + mark.bmi + " )");
}
*/
