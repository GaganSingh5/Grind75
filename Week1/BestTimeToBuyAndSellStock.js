
// Ouestion: leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

//  Greedy Approach
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0
  //Space Complexity O(1) 
  //Time Complexity O(n) length of prices array
    while(sell<prices.length) {
        let currProfit = prices[sell] - prices[buy];
        if(currProfit<0) {
            buy=sell;
        } else {
            if(currProfit>profit) {
                profit = currProfit
            }
        }
        sell++;
    }
    return profit;
};