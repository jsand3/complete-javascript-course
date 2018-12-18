var john = {
  fullName: "John Smith",
  height: 150,
  mass: 100,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

var mark = {
  fullName: "Mark Jethro",
  height: 140,
  mass: 100,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
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
