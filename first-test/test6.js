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

// 测试用例
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.myAll([p1, p2, p3]).then(res => {
  console.log(res);
});

const p4 = Promise.resolve(1);
const p5 = Promise.reject(500);
const p6 = Promise.resolve(3);

Promise.myAll([p4, p5, p6])
  .then(res => console.log("不会执行"))
  .catch(err => console.log("捕获失败：", err));