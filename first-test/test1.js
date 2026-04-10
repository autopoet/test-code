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