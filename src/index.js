module.exports = function reverse (n) {
  let absNum = Math.abs(n) ;
    let arr = (""+absNum).split("").map(Number);
    let revArr = arr.reverse();
    let  rezult = revArr.join('');
    return (rezult);
}
