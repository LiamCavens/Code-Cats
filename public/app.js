const app = function () {
    //write code
    addCat("Ezra", "Cheese", "<script>alert('fuck your image';);");
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
    listImage.innerHTML = `<img width="500" src="${catImage}"></li>`
    return listImage;
}

window.onclick = app;