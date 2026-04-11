// 手写实现数组reduce方法
Array.prototype.myReduce = function (fn, init) {
  let total;
  let list = this;
  let startIndex = 0;

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
}

// 测试用例
const arr1 = [1, 2, 3, 4, 5];
const sum1 = arr1.myReduce((total, current) => {
  return total + current;
});
console.log("测试一 (不传初始值求和)：", sum1);

const arr2 = [1, 2, 3, 4, 5];
const sum2 = arr2.myReduce((total, current) => {
  return total + current;
}, 100);
console.log("测试二 (带初始值100求和)：", sum2);

// 手写实现数组拍平
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

// 测试用例
const arr3 = [1, [2, [3, [4, [5, [6, 7]]]]]];

console.log(JSON.stringify(myFlat(arr3)));
console.log(JSON.stringify(myFlat(arr3, 2)));
console.log(JSON.stringify(myFlat(arr3, Infinity)));
