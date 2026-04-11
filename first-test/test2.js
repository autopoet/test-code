// 防抖函数
function debounce(fn, time) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, time);
  }
}

// 节流函数
function throttle(fn, time) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, time);
  };
}

// 测试用例
function sayHello() {
  console.log("防抖成功");
}

const debouncedSayHello = debounce(sayHello, 1000);

debouncedSayHello();
debouncedSayHello();
debouncedSayHello();

function skill() {
  console.log("节流成功");
}

const throttledSkill = throttle(skill, 1000);
let count = 0;
const timeId = setInterval(() => {
  count++;
  console.log(`这是第${count}次按键盘`);
  throttledSkill();

  if (count >= 10) {
    clearInterval(timeId);
    console.log("stop");
  }
}, 200);
