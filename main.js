let type=(o) => {
	let s=Object.prototype.toString.call(o);
	console.log(s.match(/\[object (.*?)\]/)[1].toLowerCase());
};
type({}); // "object"
type([]);
