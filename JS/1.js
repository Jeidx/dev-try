//Задание
//1. Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны.
 //Пример:

// let ob1 = ({name: 'test'}, {name: 'test'}) 
// let ob2 = ({name: 'test'}, {name: 'test1'}) 
// let ob3 = ({name: 'test'}, {name: 'test', age: 10}) 

 function deepEqual(s,d){
   if(s === d){
     console.log(true)
   }else{
     console.log(false)
   }
 }
 deepEqual(ob1 , ob2);