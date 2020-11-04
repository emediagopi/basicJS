let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mysrc = myImage.getAttribute("src");
  if (mysrc === "images/firefox-icon.jpg") {
    myImage.setAttribute("src", "images/edge-icon.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  }
};

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};
