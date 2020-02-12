let num1 = 56;
let num2 = 99;
let num3 = 87;
function maxNumber() {
    let maxNumber = num1;
    if (num2 > maxNumber) {
        maxNumber = num2;
    }
    if (num3 > maxNumber) {
        maxNumber = num3;
    }
    return maxNumber;

}
console.log(maxNumber(num1, num2, num3));
