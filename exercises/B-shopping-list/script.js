function shoppingList(arrayOfPeople) {
    let content = document.querySelector("#content");
    let list = document.createElement("ul");
    content.appendChild(list);
    arrayOfPeople.forEach((shoppingItem) => {
    let listItem = document.createElement("li");
    listItem.textContent = shoppingItem;
    list.appendChild(listItem);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
