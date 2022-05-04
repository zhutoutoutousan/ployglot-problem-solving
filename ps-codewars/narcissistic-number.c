#include <stdbool.h>

bool narcissistic(int num)
{
    int sum = 0;
    int n = num;
    int temp = num;
    int count = 0;
    while (temp != 0)
    {
        temp /= 10;
        count++;
    }
    temp = num;
    while (temp != 0)
    {
        int digit = temp % 10;
        sum += digit * digit;
        temp /= 10;
    }
    return sum == num ? true : false;
}


