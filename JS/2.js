//2. Напишите функцию chunkArray которая разбивает массив
 //на подмассивы на заданное количество элементов. Пример:
//  var result = chunkArray([1,2,3,4,5,6,7,8], 3);
//  Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]


    let arr = [1,2,3,4,5,6,7,8,9];
    const arrSize = 3;
    const newArr = [];
    for (let i = 0; i <arr.length; i += arrSize) {
        newArr.push(arr.slice(i, i + arrSize));
    }
    console.log(newArr);
