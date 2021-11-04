function readingList(books) {
  let contentId = document.querySelector("#content");
  //contentId.style.display = "flex";
  let bookListHeading1 = document.createElement("h1");
  bookListHeading1.innerText = "Book List";
  let unorderedList = document.createElement("ul");
  unorderedList.className = "ul";
  contentId.appendChild(bookListHeading1);
  contentId.appendChild(unorderedList);
  books.forEach((book) => {
    let newParagraph = document.createElement("p");
    //newParagraph.style.display = "inline-block";
    let list = document.createElement("li");
    let imageEl = document.createElement("img");
    imageEl.src = book.coverPage.src;
    imageEl.alt = book.coverPage.alt;
    imageEl.style.width = "auto";
    newParagraph.innerText = book.title + " - " + book.author;
    if (book.alreadyRead){
      list.style.backgroundColor = "green";
    }else{
      list.style.backgroundColor = "red";
    }
    list.appendChild(newParagraph);
    list.appendChild(imageEl);
    list.className = "li";
    unorderedList.appendChild(list);
    //contentId.appendChild(newParagraph)
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
    },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);