
let n = 5;
let poklopac = ' '.repeat(n - 1) + '#';
    console.log(poklopac);
for (let i = 0; i < n-1; i++) {
    let row = ' '.repeat(n - i - 2) + '#' + '#'.repeat((2 * i+2)/2);
    console.log(row);
}