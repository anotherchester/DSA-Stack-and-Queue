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

