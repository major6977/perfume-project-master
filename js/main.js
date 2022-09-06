// Blinking Text

let speed = 500;
setInterval(function () {
  let blink = document.getElementById("blink");

  blink.style.visibility =
    blink.style.visibility == "hidden" ? "visible" : "hidden";
  blink.style.color = "yellow";
  blink.style.fontSize = "20px";
}, speed);

// Mobile Nav

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
