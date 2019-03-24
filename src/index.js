module.exports = function getZerosCount(number, base) {
  var a = Number.MAX_VALUE;
  var j = base;

  for (let i = 2; i <= base; i++) {

 if (j % i === 0) {
 var count = 0;
        while (j % i === 0) {
         j = j / i;     
         count++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      a = Math.min(a, Math.floor(c / count))
    }
  }
  return a;
}