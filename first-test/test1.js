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
  if (typeof boj !== 'object' || obj != null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// 测试用例
const originalData = {
  name: "小明",
  info: {         // 嵌套的对象
    city: "北京"
  }
};

const deepData = deepClone(originalData);

deepData.name = "大明";
deepData.info.city = "上海";
console.log("原数据姓名：", originalData.name); // 小明
console.log("原数据城市：", originalData.info.city); // 北京