//手写实现数组reduce方法
Array.prototype.myReduce = function (fn, init) {
  let total;
  let list = this;
  let startIndex = 0;
  if (list.length == 0) {
    return;
  }
  if (arguments.length > 0) {
    total = init;
  } else {
    total = list[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < list.length; i++) {
    fn(total, list[i], i, list);
  }
  return total;
}

// 手写实现数组拍平
function flat(list) {
  const newList = [];
  list.array.forEach((item) => {
    if (Array.isArray(item)) {
      newList.push(...flat(item));
    } else {
      newList.push(item);
    }
  });
  return newList;
}