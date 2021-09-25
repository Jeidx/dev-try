//6. Написать метод getBase64FromUrl который конвертирует картинку в строку base64 
//(метод должен быть реализован с помощью Promise). Пример:

 //getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
 //.then(console.log)
 //.catch(console.error)


// Output
//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....


function readImage(url, callback) {   
    var request = new
    XMLHttpRequest();   request.onload = function() {
       var file = new FileReader();
       file.onloadend = function() {
          callback(file.result);
       }
       file.readAsDataURL(request.response);   };   
       request.open('GET', url);   
       request.responseType = 'blob';              
       request.send(); 
}

readImage('[path image] ',  function(base64) {  console.info(base64); 
});