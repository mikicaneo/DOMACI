
function maxNumber(num1, num2, num3) {
    let maxNumber = num1;
    if (num2 > maxNumber) {
        maxNumber = num2;
    }
    if (num3 > maxNumber) {
        maxNumber = num3;
    }
    return maxNumber;

}
console.log(maxNumber(16, 23, 65));
