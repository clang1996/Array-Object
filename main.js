// const div = document.getElementById('wrapper')
const bubbleSort=(arr) => {
	let length=arr.length;
	for (let i=length; i>=2; i--) {
		for (let j=0; j<=i - 1; j++) {
			if (arr[j]>arr[j + 1]) {
				[arr[j], arr[j + 1]]=[arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};
let arr=[1, 5, 13, 8, 6, 9, 31, 85, 0, 11];
console.log(bubbleSort(arr));
const countSort=(arr) => {
	let hash={};
	let max=0;
	let result=[];
	for (let i=0; i<arr.length; i++) {
		if (!(arr[i] in hash)) {
			hash[arr[i]]=1;
		}else {
			hash[arr[i]]+=1;
		}
		if (arr[i]>max) {max=arr[i];}
	}
	for (let j=0; j<=max; j++) {
		if (j in hash) {
			for (let i=0; i<hash[j]; i++) {
				result.push(j);
			}
		}
	}
	return result;
};
let arr3=[1, 3, 9, 2, 4, 6, 9, 3, 7, 6, 3,];
console.log(countSort(arr3));
const quickSort = (arr)=>{
	if (arr.length<=1){return arr}
	const left=[]
	const right=[]
	let pivotIndex  = Math.floor(arr.length/2)
	let pivot = arr.splice(pivotIndex,1)[0]
	for (let i=0;i<arr.length;i++){
		if (arr[i]<pivot){
			left.push(arr[i])
		}else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot],quickSort(right))
}
let arr4=[5,6,3,1,2,8,4,1,9,3,7]
console.log(quickSort(arr4));