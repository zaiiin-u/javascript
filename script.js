// Remember, we're gonna use strict mode in all scripts now!
"use strict";
section - 2;
/*/*const markmass = 78;
const markheight = 1.69;
const johnmass = 92;
const johnheight = 1.95;
const markBMI = markmass / markheight ** 2;
const johnBMI = johnmass / johnheight ** 2;
const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(
    "Mark's BMI " + markBMI + " is higher than John's BMI " + johnBMI
  );
} else {
  console.log(
    "John's BMI " + johnBMI + " is higher than Mark's BMI " + markBMI
  );
}
*/
/*const minnscore = 100;
const avgdolphinsscore = (96 + 108 + 89) / 3;
const avgkolasscore = (88 + 91 + 110) / 3;
if (avgdolphinsscore > avgkolasscore && avgdolphinsscore >= minnscore) {
  console.log("team dolphin wins");
} else if (
  avgdolphinsscore === avgdolphinsscore &&
  avgdolphinsscore >= minnscore &&
  avgkolasscore >= minnscore
) {
  console.log("draw");
} else if (avgdolphinsscore < avgkolasscore && avgkolasscore >= minnscore) {
  console.log("team kolas wins");
} else {
  console.log("No team wins");
}
*/
/*const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
const totalvalue = bill + tip;
console.log(
  "the bill was " +
    bill +
    " the tip was " +
    tip +
    " and the total bill was " +
    totalvalue
);*/
section - 3;
/*const averagescore = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avg_dolphins_score = averagescore(44, 23, 71);
console.log(avg_dolphins_score);
const avg_kolass_score = averagescore(65, 54, 49);
console.log(avg_kolass_score);
const checkwinner = (avg_dolphins_score, avg_kolass_score) => {
  if (avg_dolphins_score >= 2 * avg_kolass_score) {
    console.log(
      "dolphon wins " + avg_dolphins_score + " vs " + avg_kolass_score
    );
    return avg_dolphins_score;
  } else if (avg_kolass_score >= 2 * avg_dolphins_score) {
    console.log("kolas wins " + avg_kolass_score + " vs." + avg_dolphins_score);
    console.log(`kolas wins ${avg_kolass_score} vs. ${avg_dolphins_score}`);
    return avg_kolass_score;
  } else {
    console.log("no team wins");
  }
};
console.log(checkwinner(avg_dolphins_score, avg_kolass_score));
console.log(checkwinner(533, 222));*/

/*const bill = new Array(125, 555, 25);
const caltip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};
const tip = [caltip(bill[0]), caltip(bill[1]), caltip(bill[2])];
console.log(tip);
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);
*/
/*const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI ${mark.bmi} is higher then john's BMI ${john.bmi}`);
} else {
  console.log(`John's BMI ${john.bmi} is higher then Mark's BMI ${mark.bmi}`);
}
*/
/*
const bill = new Array(125, 555, 25, 50, 600, 700, 20, 34, 78, 56);
const caltip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};
const tip = [];
const totals = [];

for (let i = 0; i < 10; i++) {
  tip[i] = caltip(bill[i]);
  totals[i] = tip[i] + bill[i];
  console.log(bill[i], tip[i], totals[i]);
}
*/
/*
var sum = 0;
function calaverage(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(calaverage([125, 555, 25, 50, 600, 700, 20, 34, 78, 5]));
*/
section - 5;
/*
const printforecast = function (t1) {
  let new_one= "";
  for (let i = 0; i < t1.length; i++) {
    new_one += `${t1[i]}C in ${i + 1} day...`;
    //`${t1[i]}C in ${i} day`
  }
  console.log("..." + new_one);
};
printforecast([12, 13, 14]);
*/
//to create array

/*const printforecast = function (t1) {
  let new_one = "";
  let array1 = [];
  for (let i = 0; i < t1.length; i++) {
    new_one = `${t1[i]}C in ${i + 1} day`;
    //`${t1[i]}C in ${i} day`
    array1.push(new_one);
  }
  console.log(array1);
};
printforecast([12, 13, 14]);
*/
