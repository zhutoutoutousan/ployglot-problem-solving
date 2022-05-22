int maxProfit(int* prices, int pricesSize, int fee){
    // Two Pointers
    int left = 0;
    int right = 0; 
    int max = 0;
    int min = INT_MAX;
    while(right < pricesSize){
        if(prices[right] < min){
            min = prices[right];
        }
        if(prices[right] - min >= fee){
            max = max > prices[right] - min - fee ? max : prices[right] - min - fee;
        }
        right++;
    }
    return max;
}