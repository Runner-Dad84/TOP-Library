
//See Display form
let count = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
const submit = document.getElementById("submit");
let shelf = document.getElementById("shelf");

let form1 = document.getElementById('form');
let Title, Author, Year, Category, Genre;
let library = [];

//constructor
function book (Title, Author, Year, Category, Genre) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.Category = Category;
    this.Genre = Genre;
}

//display or disapear form with button press
let displayForm = function () {
    let form = document.getElementById("form");
    if (count % 2) {
        form.style.display="none";
        count+=1;
    } else {
        form.style.display="block";
        count+=1;
    };
    
}

//adds array item to DOM and to document on shelf
function displayBook (){
        shelf.textContent = "";
        for (i=0; i<library.length; i++) {
            let div = document.createElement("div");
            for (let key in library[i]) {
                let bookIndex = library[i];
                let para = document.createElement("p");
                para.appendChild(document.createTextNode(`${key}: ${library[i][key]}`))
                div.appendChild(para);
                shelf.appendChild(div)
            }
        };
    
            
};

//Pull form data
//add event listener and put this constant inside. Likely my code is creating a blank form and then trying to access it.





submit.addEventListener("click", event => {
    event.preventDefault();
    Title = (form1.elements[0].value);
    Author = (form1.elements[1].value);
    Year = (form1.elements[2].value);
    Category = (form1.elements[3].value);
    Genre = (form1.elements[4].value);
    let newBook = new book (Title, Author, Year, Category, Genre);
    library.push(newBook);
    displayBook ()
}
);





/*
function myFunction() {
    let data = form.elements;
    library.push(data);
    displayBook ();
};


submit.addEventListener("click", myFunction);
*/

