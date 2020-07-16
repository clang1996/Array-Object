// 字符串,怎么判断str中有'876'?
// 怎么判断str头部有'XM'?
// 怎么判断str倒数第二个字符是'Y'?
// 怎么判断str中第三个字符是'S'?
let str='XMS00087672542-YD';
console.log(str.includes('876'));
console.log(str.startsWith('XM'));
console.log(str.endsWith('Y',str.length-1));
console.log(str.startsWith('S',2));
//模板字符串
const a = '我是变量';
let str2 = `${a},我是常量`;
console.log(str2)//我是变量，我是常量
