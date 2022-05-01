def is_prime(num):
    # Fermat's factorization method
    # https://www.quora.com/How-can-one-test-if-a-large-number-is-prime

    # Miller_Rabin(
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(num**0.5)+1, 2):
        if num % i == 0:
            return False
    return True
    
