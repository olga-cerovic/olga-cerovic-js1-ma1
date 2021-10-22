const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1:

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3:

heading.style.fontSize = "2em";

//Question 4:

heading.classList.add("subheading");

//Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.background = "red";
}

//Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "yellow";

//Question 7:

function displayListItems(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

displayListItems(cats);

//Question 8:

function createCats(cats) {
  console.log(cats);

  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }
    html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
             </div>`;
  }
  return html;
}

createCats(cats);

const updatedHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = updatedHTML;
