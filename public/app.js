const app = function () {
    //write code
    addCat("Ezra", "Cheese", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/An_Indian_tiger_in_the_wild._Royal%2C_Bengal_tiger_%2827466438332%29.jpg/800px-An_Indian_tiger_in_the_wild._Royal%2C_Bengal_tiger_%2827466438332%29.jpg");
}

const addCat = function (name, favouriteFood, catImage) {
    let ulCatClass = createUnorderedList();
    let listName = createListName(name);
    let listFood = createListFood(favouriteFood);
    let listImage = createListImage(catImage);

    let cats = document.querySelector("#cats");

    ulCatClass.appendChild(listName);
    ulCatClass.appendChild(listFood);
    ulCatClass.appendChild(listImage);
    cats.appendChild(ulCatClass);
}

const createUnorderedList = function () {
    let ulCatClass = document.createElement("ul");
    ulCatClass.classList.add("cat");
    return ulCatClass;
}

const createListName = function (name) {
    let listName = document.createElement("li");
    listName.textContent = `Name: ${name}`
    return listName;
}

const createListFood = function (food) {
    let listFood = document.createElement("li");
    listFood.textContent = `Favourite food: ${food}`
    return listFood;
}

const createListImage = function (catImage) {
    let listImage = document.createElement("li");
    listImage.innerHTML = `<img src="${catImage}"></li>`
    return listImage;
}

window.onclick = app;