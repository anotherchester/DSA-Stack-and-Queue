const Stack = require('./stack')

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(starTrek)
function peek(item) {
  if (item.top === null) { return null }
  else return item.top
}

console.log(peek(starTrek));

function isEmpty(item) {
  if (item.top) { return "Is not empty" }
  else { return "Is empty" }
}

console.log(isEmpty(starTrek));


function display(item) {
  let current = item.top;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  return current;
}
display(starTrek)

function removeMcCoy(item) {
  item.pop()
  item.pop()
  return item
}
console.log(removeMcCoy(starTrek))



function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");




  let stack = new Stack()
  let strSplit = s.split('')
  console.log(strSplit)
  let emptyStr = ''
  strSplit.forEach(char => stack.push(char))
  for (let i = strSplit.length; i > 0; i--) {
    emptyStr += stack.pop()
  }
  console.log(s === emptyStr)
  return s === emptyStr
}
//True, true, true, false
is_palindrome("dad");
is_palindrome("A man, a plan, a canal: Panama");
is_palindrome("1001");
is_palindrome("Tauhida");

function matchingParentheses(expr) {
  const stack = new Stack()
  const match = {
    '(': ')',
    '[': '}',
  }

  for (let i = 0; i < expr.length; i++)
  // if opening, push to stack
  {
    if (expr[i] === '(') { stack.push(expr[i]) }
    //if closing, pop from stack
    else if (expr[i] === ')') {
      let last = stack.pop()
      if (expr[i] !== match[last]) { return false }
    }
  }
  if (stack.top !== null) { return false }
  return true
}
console.log('Matching:', matchingParentheses('()()(())'))
console.log(`Matching: `, matchingParentheses('(((()'))


function createStack() {
  const newStack = new Stack
  newStack.push(10)
  newStack.push(9)
  newStack.push(6)
  newStack.push(7)
  newStack.push(8)

  return newStack
}

function sortStack(item) {
  // create a temporary stack
  const tempStack = new Stack
  // while input is not empty
  while (item.top) {
    // pop element from input
    let temp = item.pop()
    //while temp stack not empy and top of temp stack is less than temp
    while (tempStack.top && tempStack.top.data < temp) {
      // pop from temp stack and push to input stack
      item.push(tempStack.pop())
    }
    //push temp to temp stack
    tempStack.push(temp)
  }
  console.log(display(tempStack))
}

sortStack(createStack())
