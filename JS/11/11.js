let additem = document.getElementById('btnInsert');
let removeitem = document.getElementById('btnRemove');
let table = document.getElementById('sampleTable');
let container = document.querySelector('.container');
let clicks = 2;

additem.onclick = function addRow(){
    clicks += 1;  
    let newRow = table.insertRow(table.rows.length/2+1); 
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    cel1.innerHTML = `Row${clicks} cell1`;
    cel2.innerHTML = `Row${clicks} cell2`;
    
}
let arr = table.getElementsByTagName("td");
removeitem.onclick = function(){
    let last=arr[arr.length-1];
    last.parentNode.removeChild(last);
}


