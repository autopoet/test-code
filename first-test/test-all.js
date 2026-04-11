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

// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// 防抖
function debounced(fn, time) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}

// 节流
function throttle(fn, time) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();

    if (now - lastTime > time) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// function.bind
Function.prototype.myBind = function (obj, ...args) {
  const context = (obj !== null && typeof obj === 'object') ? obj : window;

  return (...args2) => {
    this.call(context, ...args, ...args2);
  };
}

// function.call
Function.prototype.myCall = function (obj, ...args) {
  const context = (obj !== null && typeof obj === 'object') ? obj : window;

  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
}

// function.apply
Function.prototype.myApply = function (obj, argArray) {
  const context = (obj !== null && typeof obj === 'object') ? obj : window;

  const key = Symbol();
  context[key] = this;
  let result;
  if (!argArray) {
    result = context[key]();
  } else {
    result = context[key](...argArray);
  }
  delete context[key];

  return result;
}

// 实现数组reduce方法
Array.prototype.myReduce = function (fn, init) {
  let total;
  let list = this;
  let startIndex;

  if (list.length === 0 && arguments.length < 2) {
    throw new TypeError('error');
  }

  if (arguments.length > 1) {
    total = init;
    startIndex = 0;
  } else {
    total = list[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < list.length; i++) {
    total = fn(total, list[i], i, list);
  }

  return total;
};

// 实现数组拍平
function myFlat(arr, depth = 1) {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...myFlat(item, depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
}

// 实现new
function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  fn.apply(obj, args);
  return obj;
}

// 实现instanceof
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  while (proto) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

// 实现promise.all
Promise.myAll = function (list) {
  let finishNums = 0;
  const result = [];

  return new Promise((resolve, reject) => {
    if (list.length === 0) return resolve([]);

    list.forEach((item, index) => {
      Promise.resolve(item).then(
        (res) => {
          finishNums++;
          result[index] = res;
          if (finishNums === list.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};