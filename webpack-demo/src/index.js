import sum from '../moduleLog';
function allSum() {
    let a = 10,
        b = 20;

    let sum = sum(a, b);
    console.log(sum)
}
module.exports = {
    allSum
}