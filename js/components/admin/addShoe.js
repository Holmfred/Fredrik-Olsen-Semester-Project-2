import { retriveFromStorage } from "./retriveStorageShoe.js"
 
let shoeList = retriveFromStorage();

export function addNewShoe() {
    const button = document.querySelector(".addShoeInputs button")
    const titleInput = document.querySelector(".titleInput")
    const priceInput = document.querySelector(".priceInput")
    const descriptionInput = document.querySelector(".descriptionInput")

    button.addEventListener("click", handleClick);

    function handleClick() {
        
        const newTitle = titleInput.value.trim();
        const newPrice = priceInput.value.trim();
        const newDescription = descriptionInput.value.trim();

        if(newTitle.lenght >= 5 && newPrice.lenght >= 2 && newDescription.lenght >= 20) {
            const newShoe = "Title" + newTitle + " " + "Price" + newPrice + " " + "Description" + newDescription;
            shoeList.push(newShoe)
            
            saveShoes(shoeList)
            console.log(shoeList)
        }
    }

    function saveShoes(newStorageShoes) {
        localStorage.setItem("newShoes", JSON.stringify(newStorageShoes));
    }

}

