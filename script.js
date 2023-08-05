
//See Display form
let count = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
const submit = document.getElementById("submit");
let shelf = document.getElementById("shelf");
let form1 = document.getElementById('form');
let Title, Author, Year, Category, Genre;
let rmvBtn;
let readBtn;
let library = [];

//constructor
function book (Title, Author, Year, Category, Genre) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.Category = Category;
    this.Genre = Genre;
};

//book prototype
const bookProto = {};

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
};

function displayBook (){
        shelf.textContent = "";
        for (i=0; i<library.length; i++) {
            let div = document.createElement("div");
            div.id = `${[i]}`;
            div.dataset.id = [i];
            rmvBtn = document.createElement("button");
            readBtn = document.createElement("button");
            rmvBtn.id = `${[i]}`;
            rmvBtn.dataset.indexNum = [i];
            rmvBtn.addEventListener("click", e => 
            {
                let elementID = e.target.id;
                for (i = 0; i < library.length; i++) {
                    let index = [i];
                    if (elementID > -1) {
                        library.splice(elementID, 1);
                        displayBook ()
                    }
                }
            });
            rmvBtn.innerText = "Remove Book";
            div.appendChild(rmvBtn);
            readBtn.innerText = "Haven't Read";
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
});
