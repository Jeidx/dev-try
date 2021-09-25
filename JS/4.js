// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример: 

// console.log(firstUnique([1,2,3,2,1,3,4,5,5]) 
// output 4

let arr = [1,2,3,2,1,3,4,5,5];


newArr = arr.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});
console.log(newArr);