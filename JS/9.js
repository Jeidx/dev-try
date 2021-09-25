//9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

//let x = 'test task'
//console.log(x.toTitleCase())
// Outputs: Test Task

let str = "test task";

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
}
console.log(capitalize(str));