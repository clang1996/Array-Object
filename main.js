let name=Array.from(('ADDSSASDSDSEIEKDSSESDDEWESS'))
let count=name.reduce(function (container, item) {
	if (item in container) {
		container[item]++;
	}else {
		container[item]=1;
	}
	return container;
}, {});
console.log(count)