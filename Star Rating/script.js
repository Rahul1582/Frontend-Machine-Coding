function Star(el, count, callback) {
  // Write a logic to create star rating problem
  let selectedStar = -1;
  const element = document.querySelector(el);
  const parent = document.createElement("div");

  for (let i = 1; i <= count; i++) {
    const children1 = document.createElement("span");
    children1.classList.add("fa");
    children1.classList.add("fa-star-o");
    children1.dataset.rating = i;
    parent.appendChild(children1);
  }

  element.appendChild(parent);
  element.addEventListener("mouseover", mouseOver);
  element.addEventListener("click", mouseClick);
  element.addEventListener("mouseleave", mouseLeave);

  function mouseOver(event) {
    let rating = event.target.dataset.rating;
    if (!rating) {
      return;
    }
    fill(rating);
  }

  function mouseClick(event) {
    let rating = event.target.dataset.rating;
    selectedStar = rating;
    callback(rating);
  }

  function fill(ratingval) {
    const stars = document.querySelectorAll(".fa");
    for (let i = 0; i < count; i++) {
      if (i < ratingval) {
        stars[i].classList.add("fa-star");
      } else {
        stars[i].classList.remove("fa-star");
      }
    }
  }
  function mouseLeave(event) {
    fill(selectedStar);
  }
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);
