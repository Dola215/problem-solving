const { LinkedList } = require('./LL');

// Create a new instance of LinkedList
const myList = new LinkedList();
// add nodes to LL
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(5);
const middleNode = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode(myList.gethead()));
