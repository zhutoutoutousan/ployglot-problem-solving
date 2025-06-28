// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/c

#include <string.h>
#include <stdlib.h>

/* Return 1 is addr is a valid IP address, return 0 otherwise */
int is_valid_ip(const char * addr) {
    // Process input
    char * token = strtok((char *)addr, ".");
    int i = 0;
    int ip[4];
    while (token != NULL) {
        ip[i] = atoi(token);
        token = strtok(NULL, ".");
        i++;
    }
    // Check if IP is valid
    if (i != 4) return 0;
    for (i = 0; i < 4; i++) {
        if (ip[i] < 0 || ip[i] > 255) return 0;
    }
    return 1;
};