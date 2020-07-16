//1.isNaN判断是否为NaN，返回布尔值
Number.isNaN(NaN);//true
Number.isNaN(true);//false
Number.isNaN('a');//false
Number.isNaN(58/NaN);//true
Number.isNaN('a'/NaN);//true
Number.isNaN(NaN/0);//true
//2.判断是否为整数，返回布尔值
Number.isInteger('255')//false
Number.isInteger(3)//true
Number.isInteger(3.0)//true
//3.parseInt()，
// 解析一个字符串直到达小数点或者数字的末端为止，
// 并返回一个整数，
// 如果字符串的第一个字符不能被转换为数字，那么会返回 NaN。
console.log(parseInt('0225D2.25'));//225
console.log(parseInt('0225.25'));//225
console.log(parseInt('D225.25'));//NaN
//4.parseFloat()
// 解析一个字符串直到达数字的末端或第二个小数点为止，并返回一个浮点数，
// 如果字符串的第一个字符不能被转换为数字，那么会返回 NaN。
console.log(parseFloat('0225.25D25'));//225.25
console.log(parseFloat('0225.2.25'));//225.2
console.log(parseFloat('D225.25'));//NaN