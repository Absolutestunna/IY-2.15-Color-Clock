var isHovering = false;
var clockCol = document.querySelector('#clock');


function displayTime() {

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  // console.log(currentTime);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }  // add zero in front of numbers < 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;
    var color = document.querySelector('#clock');

    if(isHovering){
    color.textContent = hours.toString(16) + ":" + minutes.toString(16) + ":" + seconds.toString(16);
  }

}
function check() {
  var widthSel = document.querySelector("#myBar");
  console.log(widthSel);
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var counter = 0;


    if (counter == 100){
      widthSel.style.width
    } else {
      counter = (seconds/60)*100;
      console.log(counter)
      widthSel.style.width = counter + '%';


  }
}

function trackMouseOn() {
  // console.log('backgroundColor');
  isHovering = true;
  var background = document.querySelector('#clock');
  background.style.backgroundColor = "rgba(231, 142, 32, 0.6)";
}

function trackMouseOff() {
  // console.log('mouseleave');
  isHovering = false;
  var background = document.querySelector('#clock');
  background.style.backgroundColor = "rgba(234, 110, 203, 0.6)";
}

clockCol.addEventListener('mouseenter', trackMouseOn);
clockCol.addEventListener('mouseleave', trackMouseOff);

displayTime();
setInterval(displayTime, 1000);
setInterval(check, 1000);
