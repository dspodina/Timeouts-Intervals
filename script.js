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
var secs, now, timer,
    mins = 0
function time(){
  secs = Math.floor((Date.now() - now)/1000)
  if(secs == 60 ){
    now = Date.now()
    mins++
  }
  if(secs < 10){
    secs = '0' + secs
  }
  timerid.innerHTML = mins + ':' + secs
}
start.onclick = function(){
  now = Date.now()
  mins = 0
  timer = setInterval(time)
}
