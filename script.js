// document.querySelector('input[="text"]')
//    .addEventListener('focus', function(){
//    this.style.borderColor = "initial";
// });
// document.querySelector('input[type="text"]')
//    .addEventListener('blur', function(){
//      if (this.value) {
//       this.style.borderColor = "red";
//      }
// });

// //blur - check if it's empty. If empty highlight borders red.
// //Focus - remove red borders.

// document.querySelector('input[="text"]')
//    .addEventListener('change', function(){
//    alert('Changed');
// });
// document.querySelector('input[="checkbox"]')
//    .addEventListener('change', function(){
//    if (this.value){
//     alert('you are employed');
//    }
//    else{
//     alert('you are unemployed');
//    }
// });


document.querySelector('input[type="text"]')
  .addEventListener('input', function(){
  console.log('input event triggered')
});
  
//when select changes
//show akert with the region for the city
document.querySelector('input[type="text"]')
  .addEventListener('input', function(){
  if(this.value == ''){
    alert('Osh');
  }
  else if (this.value == ''){
    alert()
  }
});
///tcasde