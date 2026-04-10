// 手写实现function.bind
Function.prototype.myBind = function (obj, ...args) {
  const context = typeof obj === 'object' ? obj : window;
  return (...args2) => {
    this.call(obj, ...args, ...args2);
  };
};

// 手写实现function.call
Function.prototype.myCall = function (obj, ...args) {
  const context = typeof obj === 'object' ? obj : window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};

// 手写实现function.apply
Function.prototype.myApply = function (obj, argArray) {
  obj = typeof obj === 'object' ? obj : window;

  const key = Symbol();
  obj[key] = this;
  let result;
  if (!argArray) {
    result = obj[key]();
  } else {
    result = obj[key](...argArray);
  }
  delete obj[key];

  return result;
}