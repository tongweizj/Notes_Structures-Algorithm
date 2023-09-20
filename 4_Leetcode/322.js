/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  return dp(coins,amount);  
};

var dp = function(coins,amount){
    // base case
    if(amount == 0) return 0;
    if(amount < 0 ) return -1;

    var res = Int.
}
