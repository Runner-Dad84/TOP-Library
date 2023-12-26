
//See Display form
let count = 0;
let sum = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const genre = document.getElementById("genre");
let shelf = document.getElementById("shelf");
let form1 = document.getElementById('form');

let Title, Author, Year, Category, Genre;
let rmvBtn;
let readBtn;
let element2ID;
let library = [];



//constructor

class book {
constructor (Title, Author, Year, Category, Genre) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.Category = Category;
    this.Genre = Genre;
}
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
};

function displayBook (){
        shelf.textContent = "";
        for (i=0; i<library.length; i++) {
            let div = document.createElement("div");
            rmvBtn = document.createElement("button");
            readBtn = document.createElement("button");
            rmvBtn.id = `${[i]}`;
            readBtn.id = `${[i]}`;
            rmvBtn.addEventListener("click", e => {
                let elementID = e.target.id;
                for (i = 0; i < library.length; i++) {
                    if (elementID > -1) {
                        library.splice(elementID, 1);
                        displayBook ()
                    }
                }
            });
            readBtn.addEventListener("click", e => {
                let element2ID = e.target.id;
                for (i = 0; i < library.length; i++) {
                    if (element2ID > -1) {
                        if (sum % 2) {
                            e.target.innerText="Haven't Read";
                            e.target.style.backgroundColor = "White";
                            e.target.style.color = "Purple";
                            sum+=1;
                        } else {
                            e.target.innerText="Book Read";
                            e.target.style.backgroundColor = "Purple";
                            e.target.style.color = "White";
                            sum+=1;
                        }  
                    }
                }
            })
            rmvBtn.innerText = "Remove Book";
            div.appendChild(rmvBtn);
            readBtn.innerText = "Read Book?";
            div.appendChild(readBtn);
            for (let key in library[i]) {
                let para = document.createElement("p");
                para.appendChild(document.createTextNode(`${key}: ${library[i][key]}`))
                div.appendChild(para);
                shelf.appendChild(div);
            }
        };     
};

//Pull form data
const fiction = document.getElementById("fiction");
const nonfiction = document.getElementById("nonfiction");
let fictionValue;

function fictionType () {
    if (fiction.checked) {
        return fictionValue = "Fiction";
    } else if (nonfiction.checked) {
        return fictionValue = "Nonfiction"
    };
}

//Reset for fields
function resetFields () {
    title.value = "";
    author.value = "";
    year.value = "";
    fiction.value="";
    nonfiction.value="";
    genre.value = "";
}
//submit forms, update library, display to shelf
submit.addEventListener("click", event => {
    if (title.value === "") {
        event.preventDefault();
        title.setCustomValidity("Please enter a book title.")
        title.reportValidity();
        displayBook();
    } else if ((year.value < 0) || (year.value > 2024) || (year.value === "")) {
        event.preventDefault();
        year.setCustomValidity("Include publish date from 0 to 2024.")
        year.reportValidity();
        displayBook();
    } else {


    event.preventDefault();
    fictionType();
    Title = (title.value);
    Author = (author.value);
    Year = (year.value);
    Category = fictionValue;
    Genre = (genre.value);
    let newBook = new book (Title, Author, Year, Category, Genre);
    library.push(newBook);
    displayBook();
    resetFields();
    };
});
