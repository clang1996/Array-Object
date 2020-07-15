let arr=[1, 1, 5,
	'true', 'true', true, true,
	15, 15,
	false, false,
	undefined, undefined,
	null, null,
	NaN, 'NaN',
	0, 0,
	'a', 'a',
	{}, {}];
//1.ES6 Set()
const unique1=(arr) => {
	return [...new Set(arr)];
};
// console.log(unique1(arr));
///
//2.Map去重
const unique2=(arr) => {
	let map=new Map();
	let array=[];
	for (let i=0; i<arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], true);
		}else {
			map.set(arr[i], false);
			array.push(arr[i]);
		}
	}
	return array;
};
// console.log(unique2(arr));
//3.forEach + includes
const unique3=(arr) => {
	let array=[];
	arr.forEach(val => {
		if (!array.includes(val)) {
			array.push(val);
		}
	});
	return array;
};
// console.log(unique3(arr));
//4.reduce + includes
const unique4=(arr) => {
	return arr.reduce((pre, current) => {
		if (!pre.includes(current)) {
			pre.push(current);
		}
		return pre
	}, []);
};
// console.log(unique4(arr));
// 5.hashTable 只适合正整数数组
let hashTable = {}
const unique5 = (arr)=>{
	for(let i=0;i<arr.length;i++){
		if (arr[i]in hashTable){}
		else {hashTable[arr[i]]=true}
	}
	return Object.keys(hashTable);
}
let numbers = [2,4,6,2,3,4,5,4]
console.log(unique5(numbers).map(Number));