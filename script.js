var hambtn=document.getElementById("ham");
function myFunction(x) {
  x.classList.toggle("change");
}

function on() {
  $("#overlay").fadeIn("slow");
}
function off() {
  $("#overlay").fadeOut("slow");
  hambtn.classList.toggle("change");
}
