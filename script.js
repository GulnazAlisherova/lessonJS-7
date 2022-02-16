document.querySelector('input[="text"]')
   .addEventListener('focus', function(){
   this.value = "Hello";
});

document.querySelector('input[type="text"]')
   .addEventListener('blur', function(){
     this.value = "Bye";
});

//blur - check if it's empty. If empty highlight borders red.
//Focus - remove red