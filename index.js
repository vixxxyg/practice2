window.onload = start;
var image, boxImage, button;

function start() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<button class="button">Button 1</button>
     <button class="button">Button 2</button>
     <button class="button">Button 3</button>
     <div id="image"><img src="img/js.svg"</div>`
  );
  image = document.querySelector("img");
  boxImage = document.querySelector("#image");
  button = document.querySelectorAll(".button");

  button[0].onclick = action1;
  button[1].onclick = action2;
  button[2].onclick = action3;
  highlight();
}

function action1() {
  image.style.backgroundColor = "mediumseagreen";
  boxImage.style.borderRadius = "50%";
  boxImage.style.transform = "rotate(10deg)";
  button[0].style.visibility = "hidden";
}

function action2() {
  if (boxImage.style.display == "none") {
    boxImage.style.display = "block";
    highlight();
  } else {
    boxImage.style.display = "none";
    button[1].style.background = null;
    button[1].style.borderColor = null;
  }
}

function action3() {
  image.style = null;
  boxImage.style = null;
  button[0].style = null;
  button[2].style = null;
  highlight();
}

function highlight() {
  button[1].style.background = "khaki";
  button[1].style.borderColor = "khaki";
}
