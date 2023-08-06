
//See Display form
let count = 0;
let sum = 0;
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
                            sum+=1;
                        } else {
                            e.target.innerText="Book Read";
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

submit.addEventListener("click", event => {
    event.preventDefault();
    Title = (form1.elements[0].value);
    Author = (form1.elements[1].value);
    Year = (form1.elements[2].value);
    Category = (form1.elements[3].value);
    Genre = (form1.elements[5].value);
    let newBook = new book (Title, Author, Year, Category, Genre);
    library.push(newBook);
    displayBook ()
});
