//TEST
// alert('ciao');

//1. creiamo arrey con la lista della spesa 
const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

//2. individuiamo in pagina l'elemento che conterrà la lista 
let listElem = document.querySelector(".shopping-list");

//3. utilizziamo ciclo while per inserire la lista degli ingredienti in pagina 
let i = 0
while (i < shoppingList.length) {
    const curItem = shoppingList[i]; // string

    const listItemElem = document.createElement("li"); // object
    listItemElem.innerHTML = curItem;
    console.log(listItemElem);

    i++;

    listElem.append(listItemElem);
}