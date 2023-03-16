var maxProfit = function (prices) {
  let buy = 0;
  let sell = 0;
  let max = 0;
  let i = 0;
  let j = 1;
  let income = 0;

  for (i; i <= prices.length - 2; i++) {
    buy = i;
    sell = i + 1;
    income = 0;

    while (sell <= prices.length - 1 && buy <= prices.length - 2) {
      if (prices[buy] >= prices[buy + 1] && sell < prices.length - 1) {
        buy = buy + 1;
        sell = buy + 1;
      } else if (prices[buy] >= prices[buy + 1] && sell == prices.length - 1) {
        buy += 1;
        sell = buy + 1;
      } else if (
        prices[sell] > prices[buy] &&
        prices[sell] <= prices[sell + 1] &&
        sell < prices.length - 1
      ) {
        sell++;
      } else {
        income = income + prices[sell] - prices[buy];

        buy = sell + 1;
        sell = buy + 1;
      }
    }

    if (income > max) {
      max = income;
    }
    //   }
  }
  return max;
};

let input = [2, 1, 2, 0, 1];
console.log(maxProfit(input));
