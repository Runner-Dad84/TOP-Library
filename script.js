
//See Display form
let count = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
const submit = document.getElementById("submit");
let form1 = document.getElementById('form');
let title;
let author;
let year;
let category;
let genre;
let library = [];





//constructor
function book (title, author, year, category, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.category = category;
    this.genre = genre;
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
    for (i = 0; i < library.length; i++){
        let node = document.createElement("div");
        let title = document.createTextNode(library[i]);
        node.appendChild(title);
        document.getElementById("shelf").appendChild(node);        
    }
};

//Pull form data
//add event listener and put this constant inside. Likely my code is creating a blank form and then trying to access it.





submit.addEventListener("click", event => {
    event.preventDefault();
    title = (form1.elements[0].value);
    author = (form1.elements[1].value);
    year = (form1.elements[2].value);
    category = (form1.elements[3].value);
    genre = (form1.elements[4].value);
    let newBook = new book (title, author, year, category, genre);
    return library.push(newBook);
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

