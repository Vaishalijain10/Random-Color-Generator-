// selecting button element from html file and storing it in btn variable assigned to it.
let btn = document.querySelector("button");

// actions --> adding event listener to btn
btn.addEventListener("click", function () {
  console.log("generate random color!");
  // selecting h3 element for manipulation
  let h3 = document.querySelector("h3");
  // calling function and storing it in randomColor
  let randomColor = getRandomColor();
  // manipulating text
  h3.innerText = randomColor;
  console.log("color updated on h3 element!");

  // accessing div element
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  console.log("color updated on div element!");
});

// creating a function -
function getRandomColor() {
  console.log("function called!");
  // color -> rgb(value1, value2, value3);
  let red = Math.floor(Math.random() * 255);
  console.log("red : ", red);
  let green = Math.floor(Math.random() * 255);
  console.log("green : ", green);
  let blue = Math.floor(Math.random() * 255);
  console.log("blue : ", blue);

  let color = `rgb(${red}, ${green}, ${blue})`;
  console.log("color : ", color);
  console.log("color generated and sending to event listener");

  return color;
}
