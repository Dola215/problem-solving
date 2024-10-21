const detectCycle = function (head) {
  if (!head.next) return null;
  let f = head,
    s = head;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;
    if (f === s) break;
  }
  if (f !== s) return null;
  s = head;
  while (s !== f) {
    s = s.next;
    f = f.next;
  }
  return s;
};
