
//See Display form
let count = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
const submit = document.getElementById("submit");
let shelf = document.getElementById("shelf");

let form1 = document.getElementById('form');
let Title, Author, Year, Category, Genre, index;
let rmvBtn;
let library = [];

//constructor
function book (Title, Author, Year, Category, Genre) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.Category = Category;
    this.Genre = Genre;
    this.index = index;
};


function test () {
        return console.log("success")};

 /*
function remove (library, target){


   
    const targetIndex = library.findIndex((book) => book.target === target);
    if (targetIndex > -1) {
        library.splice(targetIndex, 1);
    }
    return console.log(library);
    
};
*/

//book prototype
const bookProto = {
    
}
//assign proto
Object.assign(book.prototype, bookProto);

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
            rmvBtn = document.createElement("button");
            rmvBtn.onclick = test;
            rmvBtn.innerText = "Remove Book";
            div.appendChild(rmvBtn);
            for (let key in library[i]) {
                let para = document.createElement("p");
                para.appendChild(document.createTextNode(`${key}: ${library[i][key]}`))
                div.appendChild(para);
                shelf.appendChild(div);
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
    index = library.length;
    let newBook = new book (Title, Author, Year, Category, Genre);
    library.push(newBook);
    displayBook ()
}
);
