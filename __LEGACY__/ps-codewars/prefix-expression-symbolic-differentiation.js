// https://www.codewars.com/kata/584daf7215ac503d5a0001ae/train/javascript
function diff(expr) {
    // You will need a bunch of other functions to solve this kata
    // but the diff() function must exist and return the derivative of expr
    
    // Convert prefix expression to postfix expression
    let postfix = [];
    let stack = [];
    let operators = ['+', '-', '*', '/', '^', 'sin', 'cos', 'tan', 'log', 'ln', 'sqrt'];
    let precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3,
        'sin': 4,
        'cos': 4,
        'tan': 4,
        'log': 4,
        'ln': 4,
        'sqrt': 4
    };
    
    // Split expression into tokens
    let tokens = expr.split(' ');

    // Convert tokens to postfix expression
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop();
        } else if (operators.includes(token)) {
            while (stack.length > 0 && operators.includes(stack[stack.length - 1]) && precedence[token] <= precedence[stack[stack.length - 1]]) {
                postfix.push(stack.pop());
            }
            stack.push(token);
        } else {
            postfix.push(token);
        }
    }
    while (stack.length > 0) {
        postfix.push(stack.pop());
    }
 
    // Evaluate postfix expression
    let stack2 = [];
    for (let i = 0; i < postfix.length; i++) {
        let token = postfix[i];
        if (token === '+' || token === '-' || token === '*' || token === '/' || token === '^') {
            let a = stack2.pop();
            let b = stack2.pop();
            let result = eval(b + token + a);
            stack2.push(result);
        } else if (token === 'sin' || token === 'cos' || token === 'tan' || token === 'log' || token === 'ln' || token === 'sqrt') {
            let a = stack2.pop();
            let result = eval(token + '(' + a + ')');
            stack2.push(result);
        } else {
            stack2.push(token);
        }
    }
    return stack2[0];

}
