let library = ["Peter Pan", "Treasure Island", "Running with the Buffalos"];


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

function displayBook (){
    for (i = 0; i < library.length; i++){
        let node = document.createElement("div");
        let title = document.createTextNode(library[i]);
        node.appendChild(title);
        document.getElementById("shelf").appendChild(node);        
    }
}