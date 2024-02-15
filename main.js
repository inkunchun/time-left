const colors = ["#7ed348", "#26b170", "#01377d"];
const messages = [
  "Rise and shine!",
  "Take your time...",
  "Almost there...",
  "Not done? There's still tomorrow.",
];

window.onload = () => {
  const tempDate = new Date();
  changeColors(24 - tempDate.getHours());
  const span = document.createElement("span");
  const node = document.createTextNode("Loading...");
  span.appendChild(node);
  span.classList.add("text-body");
  document.body.appendChild(span);
  setInterval(callbackFn, 1000);
};

function callbackFn() {
  const date = new Date();
  let numSpan = document.getElementsByClassName("text-body");
  let totalSeconds =
    86400 - date.getHours() * 3600 - date.getMinutes() * 60 - date.getSeconds();
  let newHours = Math.floor(totalSeconds / 3600);
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = 60 - date.getSeconds();
  if (newSeconds == 60) {
    newSeconds = 0;
  }
  numSpan[0].textContent = newHours + " : " + newMinutes + " : " + newSeconds;
  changeColors(newHours);
  changeMessage(newHours);
}

function changeColors(hour) {
  if (hour > 12) {
    document.body.style.background = colors[0];
    // numSpan[0].style.color = colors[2];
  } else if (hour <= 12 && hour > 6) {
    document.body.style.background = colors[1];
    // numSpan[0].style.color = colors[2];
  } else if (hour <= 6) {
    document.body.style.background = colors[2];
    // numSpan[0].style.color = colors[0];
  }
}

function changeMessage(hour) {
  let messageBlock = document.getElementById("messages");
  if (hour > 14) {
    messageBlock.innerHTML = messages[0];
  } else if (hour > 7) {
    messageBlock.innerHTML = messages[1];
  } else if (hour > 3) {
    messageBlock.innerHTML = messages[2];
  } else {
    messageBlock.innerHTML = messages[3];
  }
}
