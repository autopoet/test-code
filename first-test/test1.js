// 函数柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 测试用例
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));

// 手写实现深拷贝
function deepClone(obj) {
  if (typeof boj !== 'object') return obj;

  const newObj = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj === 'object') {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}