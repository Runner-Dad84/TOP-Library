
//See Display form
let count = 0;
let formdata;
//Global varialble
const button = document.getElementById("formButton");
let library = ["book 1", "book 2", "book 3"];





//constructor
function book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return console.log(`The $[this.title] by $[this.author], $[this.pages], $[this.read]`)
    }
};

//add Book
function addBook () {

};

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

const submit = document.getElementById("submit");
let form = document.getElementById("form");


submit.addEventListener("click", event => {
    event.preventDefault();
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

