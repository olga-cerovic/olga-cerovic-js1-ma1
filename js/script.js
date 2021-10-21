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

/*
Question 5:
Write code that selects all the p elements on a page and assigns them to a 
variable called paragraphs.

Loop through the p elements and change the colour of each to "red".
*/

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.background = "red";
}

/*
Question 6:
Select the div with a class of results, assign it to a variable called 
resultsContainer and set its inner HTML to be <p>New paragraph</p> and 
its background colour to be yellow.
*/

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "yellow";

/*
Question 7:
Create a function that has one parameter called list.

Inside the function, loop through the list parameter and console log the 
name property in each object.

Call the function and pass in the cats variable in the script.js file in the repo.
*/

///////////////////////////////////////////////////////////////////////////////////

function displayListItems(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

displayListItems(cats);

/*
Question 8:
Create a function called createCats. The function will have one parameter called cats.

Inside the function loop through the value passed in as cats and create HTML for 
each object in the array.

Wrap each item in a div, each name property in an h5 tag and each age property 
in a p tag.

If the age property is missing, it should display “Age unknown” instead.

Return the HTML from the function.

Call the function and pass in the cats array as the argument.

Assign the return value of the function to the innerHTML property of the element 
on the HTML page with a class of cat-container.
*/

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

const updatedHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = updatedHTML;
