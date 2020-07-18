let arr=[1, 2, 3, 4];
let arr2=[5, 6, 7];
let str='hello';
console.log(arr.valueOf()); //[1,2,3,4]
console.log(arr.toLocaleString());//字符串1,2,3,4
console.log(arr.toString());//字符串1,2,3,4
console.log('------pop push  末端操作,后进先出,stack结构，改变原数组-------');
console.log(arr.push(5));//5
console.log(arr);//[1,2,3,4,5]
console.log(arr.pop()); //5
console.log(arr);//[1,2,3,4]
console.log('------shift unshift 首端操作，先进先出，queue结构，改变原数组-------');
console.log(arr.shift());// 1
console.log(arr);//[2,3,4]
console.log(arr.unshift(1));//1
console.log(arr);//[1,2,3,4]
console.log('------join 不填参数默认是逗号，字符串也可以调用-------');
console.log(arr.join());//1,2,3,4
console.log(arr.join('|'));// 1|2|3|4
console.log(Array.prototype.join.call(str, ',')); //h,e,l,l,o
console.log('------concat,合并数组并返回合并后的数组，原数组不变,可用作浅拷贝-------');
console.log(arr.concat(arr2));//[1, 2, 3, 4, 5, 6, 7]
console.log(arr);//[1,2,3,4]
console.log('------reverse ,颠倒数组，改变原数组-------');
console.log(arr2.reverse());//[7,6,5]
console.log(arr2.reverse());
console.log('------slice(start,end),返回新数组，原数组不变-------');
let x=arr.slice(0);
console.log(x);
let y=arr.slice();
console.log(y); //浅拷贝
let _arr=arr.slice(-2);
console.log(_arr); // [3,4]
console.log('------slice()可以将类数组转化为真正的数组-------');
let obj_arr=Array.prototype.slice.call({0: 'a', 1: 'b', length: 2});
console.log(obj_arr);// ['a', 'b']
let div_arr=Array.prototype.slice.call(document.querySelectorAll('div'));
console.log(div_arr);
console.log('------Array.prototype.slice.call(arguments)将arguments转为数组;-------');
console.log('-------------');
console.log('------splice(start,count,add1,add2,)...返回被删除或添加的元素，改变原数组-------');
let arr3 = [1,2,3,4,5,6,7]
console.log(arr3.splice(4, 2, 1, 2));//[5, 6]
console.log(arr3);//[1,2,3,4,1,2,7]
console.log(arr3.splice(0));//[1,2,3,4,1,2,7]
let arr4=[1,2,3,4,5,6,7]
arr4.splice(0, 0, 8)
console.log(arr4);//[8, 1, 2, 3, 4, 5, 6, 7]
//下面一组数据let a = [{name: 'apple', isSold: false},{name: 'orange', isSold: false},{name: 'banana', isSold: true},{name: 'pear', isSold: true}]请按照已售，未售排序，同时在同一已售未售下按照名称升序排列


