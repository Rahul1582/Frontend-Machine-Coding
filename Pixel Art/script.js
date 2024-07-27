function PixelArt(el, rows, cols) {
  var colors = [
    "red",
    "yellow",
    "lightgreen",
    "blue",
    "violet",
    "lightgreen",
    "lightblue",
    "orange",
    "pink",
    "green"
  ];

  var currentSelectedColor = "";
  var isMouseDown = false;

  let element = document.querySelector(el);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let box = document.createElement("div");
      box.classList.add("grid-box");
      element.appendChild(box);
    }
  }

  for (let i = 0; i < cols; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    box.style.backgroundColor = colors[i];
    box.dataset.row = "11";
    element.appendChild(box);
  }

  function setColor(target) {
    if (target.dataset.row == "11") {
      currentSelectedColor = target.style.backgroundColor;
    } else {
      if (currentSelectedColor != "") {
        target.style.backgroundColor = currentSelectedColor;
      }
    }
  }

  element.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    setColor(event.target);
  });

  element.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
      setColor(event.target);
    }
  });

  element.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}
function PixelArt(el, rows, cols) {
  var colors = [
    "red",
    "yellow",
    "lightgreen",
    "blue",
    "violet",
    "lightgreen",
    "lightblue",
    "orange",
    "pink",
    "green"
  ];

  var currentSelectedColor = "";
  var isMouseDown = false;

  let element = document.querySelector(el);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let box = document.createElement("div");
      box.classList.add("grid-box");
      element.appendChild(box);
    }
  }

  for (let i = 0; i < cols; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    box.style.backgroundColor = colors[i];
    box.dataset.row = "11";
    element.appendChild(box);
  }

  function setColor(target) {
    if (target.dataset.row == "11") {
      currentSelectedColor = target.style.backgroundColor;
    } else {
      if (currentSelectedColor != "") {
        target.style.backgroundColor = currentSelectedColor;
      }
    }
  }

  element.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    setColor(event.target);
  });

  element.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
      setColor(event.target);
    }
  });

  element.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}
