//函数柯里化
function curry(fn) {
  return function (...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args) => {
        return fn(...args, ...args2);
      };
    }
  };
}

//手写实现深拷贝
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