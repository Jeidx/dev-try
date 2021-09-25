// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:

// var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];


// console.log(arrayToObject(arr)) 
// Outputs: {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

let newArr = Object.assign({}, arr);

console.log(newArr);