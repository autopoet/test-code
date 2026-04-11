// 手写实现new
function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  fn.apply(obj, args);
  return obj;
}

// 测试用例
function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = myNew(Student, "小明", 18);

console.log(s1.name); // 输出: 小明
console.log(s1.age);  // 输出: 18
console.log(s1 instanceof Student); // 输出: true

// 手写实现instanceof
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

// 测试用例
const arr = [1, 2];
console.log(myInstanceof(arr, Array));  // true
console.log(myInstanceof(arr, Object)); // true
console.log(myInstanceof(arr, String)); // false

function Person() { }
const p = new Person();
console.log(myInstanceof(p, Person)); // true