const hasCycle = function (head) {
  // const visited = new Set();

  // while (head) {
  //   if (visited.has(head)) return true;
  //   visited.add(head);
  //   head = head.next;
  // }
  // return false;

  let f = head,
    s = head;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;
    if (f === s) return true;
  }
  return false;
};
