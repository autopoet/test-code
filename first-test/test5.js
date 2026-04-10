// 手写实现new
function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  fn.apply(obj, args);
  return obj;
}

// 手写实现instanceof
function myInstanceof(left, right) {
  const proto = Object.getPrototypeOf(left);
  while (proto) {
    if (right.prototype === proto) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
  return false;
}