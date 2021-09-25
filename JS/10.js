// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
// x.removeDuplicate() 
// Int32 Double


let x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
x = Array.from(new Set(x.split(','))).toString();
console.log(x)