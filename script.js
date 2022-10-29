// Task 1
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["Prout"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 1000); }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000); }
  }
   function StartTextAnimation(i) {
     if (typeof dataText == 'undefined'){
      clearStartTextAnimation(dataText);
      }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     }); }
  }
  StartTextAnimation(0);
});

// Task 2
let secs = 0;
let mins = 0;
setInterval (() => {
 secs += 1
 timerid.innerHTML = mins + ':' + secs
 if (secs >= 60) {
  secs = 0;
  mins += 1;
alert(`a ${mins==1?'minute has':`${mins} minutes have`} passed`);
 }
},100)

// Task
