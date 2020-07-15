let arr1=[2, 21, 4, 32, 43, 1, 9];
// 1.call/apply 方法
console.log(Math.max.call(null, ...arr1));
console.log(Math.min.apply(null, arr1));
// 2.sort()排序后取两端
let arr2=[0, 2, 21, 4, 32, 43, 1, 9, 55];
arr2.sort((a, b) => {return a - b;});
console.log(arr2[arr2.length - 1]);
console.log(arr2[0]);
//3.reduce
let arr3=[0, 2, 21, 42, 32, 43, 1, 9, 55, 100];
const sum=arr3.reduce((a, b) => a>b ? a : b);
console.log(sum);
