/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
   if (n === 0 || n === 1) {
      return n;
	}
   let f0 = 0;
   let f1 = 1;
   let res;
   for(let i = 0  ; i<(n-1); i++){
      res = f0+f1;
      f0 = f1;
      f1 = res;
   }
   return res;
};
