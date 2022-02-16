document.querySelector('input[="text"]')
   .addEventListener('focus', function(){
   this.style.borderColor = "initial";
});
document.querySelector('input[type="text"]')
   .addEventListener('blur', function(){
     if (this.value) {
      this.style.borderColor = "red";
     }
});

//blur - check if it's empty. If empty highlight borders red.
//Focus - remove red borders.

document.querySelector('input[="text"]')
   .addEventListener('change', function(){
   this.style.borderColor = "initial";
});