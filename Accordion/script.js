async function getAccordionData() {
  let data = await fetch("https://dummyjson.com/todos?limit=10&skip=80");

  let jsonData = await data.json();

  return jsonData;
}

async function accordion() {
  let data = await getAccordionData();
  data = data.todos;
  console.log(data);

  const allaccord = document.getElementById("all-accordion");

  data.forEach((element) => {
    const elem = document.createElement("div");
    const elem2 = document.createElement("div");

    elem.innerText = element.id;
    elem.setAttribute("id", element.id);
    elem.dataset.userid = element.userId;
    elem.classList.add("accor-head");
    elem2.classList.add("accord-content");
    elem2.dataset.id = element.id;
    elem2.innerText = element.todo;

    elem.appendChild(elem2);

    allaccord.appendChild(elem);
  });

  let allcontent = document.querySelectorAll(".accord-content");

  allaccord.addEventListener("click", (event) => {
    let dataid = event.target.id;
    console.log(event.target);

    allcontent.forEach((element) => {
      if (element.dataset.id == dataid) {
        element.classList.toggle("show");
      }
    });
  });
}

accordion();
