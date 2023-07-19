let library = ["Peter Pan", "Treasure Island", "Running with the Buffalos"];
//See Display form
let count = 0;


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
    let button = document.getElementById("formButton");
    if (count % 2) {
        form.style.display="none"
        count+=1;
    } else {
        form.style.display="block"
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
}