let elem = document.querySelector(".chessboard");

let checkBoxesArray = [];

for (let i = 0; i < 64; i++) {
  let tempBox = document.createElement("div");
  tempBox.classList.add("chessbox");
  tempBox.dataset.i = i;
  checkBoxesArray.push(tempBox);
}

checkBoxesArray.forEach((element, i) => {
  if (
    (i >= 0 && i <= 7) ||
    (i >= 16 && i <= 23) ||
    (i >= 32 && i <= 39) ||
    (i >= 48 && i <= 55)
  ) {
    return i % 2 === 0
      ? (element.style.backgroundColor = "#FFF")
      : (element.style.backgroundColor = "#000");
  }
  if (
    (i >= 8 && i <= 15) ||
    (i >= 24 && i <= 31) ||
    (i >= 40 && i <= 47) ||
    (i >= 56 && i <= 63)
  ) {
    return i % 2 !== 0
      ? (element.style.backgroundColor = "#FFF")
      : (element.style.backgroundColor = "#000");
  }
});

checkBoxesArray.forEach((element) => {
  return elem.append(element);
});

let cornerBoxes = (num) => {
  if (
    (num >= 0 && num <= 7) ||
    num % 8 == 0 ||
    num % 8 == 7 ||
    (num >= 56 && num <= 63)
  ) {
    return true;
  } else {
    return false;
  }
};

elem.addEventListener("click", (event) => {
  let curri = Number(event.target.dataset.i);

  let diagonalBoxesArray = [];
  diagonalBoxesArray.push(curri);

  // These variables handle corner cases like when user clicks on any perimeter boxes
  let isAllowed7plus = true;
  let isAllowed9minus = true;
  let isAllowed7minus = true;
  let isAllowed9plus = true;

  if (curri % 8 == 0) {
    isAllowed7plus = false;
    isAllowed9minus = false;
  }

  if (curri % 8 == 7) {
    isAllowed7minus = false;
    isAllowed9plus = false;
  }

  let tempi = curri;
  tempi += 9;

  while (tempi < 64 && isAllowed9plus) {
    diagonalBoxesArray.push(tempi);
    if (cornerBoxes(tempi)) {
      break;
    }
    tempi += 9;
  }

  tempi = curri;
  tempi -= 9;

  while (tempi >= 0 && isAllowed9minus) {
    diagonalBoxesArray.push(tempi);
    if (cornerBoxes(tempi)) {
      break;
    }
    tempi -= 9;
  }

  tempi = curri;
  tempi += 7;

  while (tempi < 64 && isAllowed7plus) {
    diagonalBoxesArray.push(tempi);
    if (cornerBoxes(tempi)) {
      break;
    }
    tempi += 7;
  }

  tempi = curri;
  tempi -= 7;

  while (tempi >= 0 && isAllowed7minus) {
    diagonalBoxesArray.push(tempi);
    if (cornerBoxes(tempi)) {
      break;
    }
    if (tempi % 8 == 0) {
      break;
    }
    tempi -= 7;
  }

  checkBoxesArray.forEach((element, ind) => {
    if (diagonalBoxesArray.includes(ind)) {
      return (element.style.backgroundColor = "red");
    }
  });

  checkBoxesArray.forEach((element) => {
    return elem.append(element);
  });
});
