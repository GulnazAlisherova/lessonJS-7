document.querySelector('input[="text"]')
   .addEventListener('focus', function(){
     this.value = "Hello";
   })