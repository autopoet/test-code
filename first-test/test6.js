// 手写实现Promise.all
Promise.myAll = function (list) {
  let finishNums = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    list.forEach((item, index) => {
      Promise.resolve(item).then(
        (res) => {
          finishNums++;
          result[index] = res;
          if (finishNums === list.length) {
            resolve(results);
          }
        },
        (err) => {
          reject(err);
        },
      );
    });
  });
};