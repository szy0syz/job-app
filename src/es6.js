let arr;
let arr1, arr2, myList;
// [数组]
// 遍历数据
[1, 2, 3].forEach((value, index) => {
  console.log(value, index);
});
// 映射新数据
arr = [1, 2, 3].map(v => v * 2);
// 所有元素是否通过测试
[1, 2, 3, 4].every(v => v > 3);
// 是否有某个元素通过测试
[1, 2, 3, 4].some(v => v > 3);
// 过滤数据
[1, 2, 3, 4].filter(v => v > 3);
// 查找符合条件的元素
arr = [{ name: 'one', age: 18 }, { name: 'two', age: 1 }];
// 查找索引
[1, 2, 3].indexOf(2);
// 连接数据
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
[...arr1, ...arr2];
// 数组去重
arr = [1, 2, 3, 4, 3, 2, 1];
[...new Set(arr)];
// 获取数组的头和尾
const [head, ...myList] = [1, 2, 3, 4];
const [last, ...myList] = [1, 2, 3, 4].reverse();
////////////////////////////
// [对象]
// 获取对象的key
Object.keys({ name: 'jerry', age: 2 });
// 获取对象里数据的数量
Object.keys({ name: 'jerry', age: 2 }).length;
// 遍历对象
Object.entries({ name: 'jerry', age: 2 });
// entend功能
const obj = { name: 'jerry', age: 2 };
const newObj = { ...obj, job: 'student', age: 28 };