// 防抖函数
function denounce(fn, time) {
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

