let today=new Date();
console.log('today()');
console.log(today);
//
console.log('today.toISOString()');
console.log(today.toISOString());
//
console.log('today.toDateString()');
console.log(today.toDateString());
//
console.log('today.toLocaleString()');
console.log(today.toLocaleString());
//
console.log('today.toLocaleDateString()');
console.log(today.toLocaleDateString());
//
console.log('today.toLocaleTimeString()');
console.log(today.toLocaleTimeString());
//
console.log('today.getDate()');
console.log(today.getDate());
//
console.log('today.getMonth() + 1');
console.log(today.getMonth()+1);
//
console.log('today.getFullYear()');
console.log(today.getFullYear());
//
console.log('today.getHours()');
console.log(today.getHours());
//
console.log('today.getMinutes()');
console.log(today.getMinutes());
//
console.log('today.getSeconds()');
console.log(today.getSeconds());

///
///
////
////计算今年还剩多少天
function leftDays() {
	let today = new Date();
	let endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
	let msPerDay = 24 * 60 * 60 * 1000;
	console.log(Math.round((endYear.getTime() - today.getTime()) / msPerDay));
}
leftDays();
