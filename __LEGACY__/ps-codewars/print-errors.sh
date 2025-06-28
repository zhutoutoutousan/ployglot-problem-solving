#!/bin/bash
# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/shell
printerError() {
    # Check if input is in alphabetical order and if not, increment error variable by 1
    # Return error variable, format: "n/m"
    local error=0
    for (( i=0; i<${#1}; i++ )); do
        # Check if input is in alphabetical order, bigger than previous letter and smaller than next letter
        if ! [[ ${1:$i:1} -gt ${1:$((i-1)):1} && ${1:$i:1} -lt ${1:$((i+1)):1} ]]; then
            error=$((error+1))
        fi
    done
    echo "$error/${#1}"
}
printerError $1