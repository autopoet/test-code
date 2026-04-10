// 手写实现function.bind
Function.prototype.myBind = function (obj, ...args) {
  const context = typeof obj === 'object' ? boj : window;
  return (...args2) => {
    this.call(boj, ...args, ...args2);
  };
};

//手写实现function.call
Function.prototype.myCall = function (obj, ...args) {
  const context = typeof obj === 'object' ? obj : window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};