// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример: 
//   objectToArray({
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// })
// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

 let user =  {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}
let arr = Object.keys(user).map((el) => [(el), user[el]]);

console.log(arr);