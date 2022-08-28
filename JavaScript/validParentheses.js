/**
 * https://leetcode.com/problems/valid-parentheses
 */

//  solved using stack, pushing the left parentheses and on each right parantheses pop the left parentheses from the stack
var isValid = function(s) {
    if(!s.length){
        return false;
    }

    const parentheses = {
        left: ['(', '[', '{'],
        right: [')', ']', '}']
    }

    const stack = [];

    for(let i=0; i<s.length;i++){
        const top = stack[stack.length - 1];

        if(parentheses.left.includes(s[i])) stack.push(s[i]);
        else if(s[i] === parentheses.right[0] && top === parentheses.left[0] && stack.length) stack.pop();
        else if(s[i] === parentheses.right[1] && top === parentheses.left[1] && stack.length) stack.pop();
        else if(s[i] === parentheses.right[2] && top === parentheses.left[2] && stack.length) stack.pop();
        else{
            return false;
        }
    }
    return !stack.length;
};

let s = "[({}[])]";
console.log(isValid(s));


//  solved using stack & map, pushing the right parentheses and on each left parantheses pop the right parentheses from the stack

var isValidStackMap = function(s) {
    if(!s.length%2){
        return false;
    }

    const stack = [];

    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    for(let i=0; i<s.length; i++){
        if(map.has(s[i])) stack.push(map.get(s[i]));
        else if(s[i] !== stack.pop()) return false;
    }

    return !stack.length;
}

let str = "[({[][][({})]})]";
console.log(isValidStackMap(str));