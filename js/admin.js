import { retriveFromStorage } from "./components/admin/retriveStorageShoe.js"

const shoeList = retriveFromStorage();

const container = document.querySelector(".something");

container.innerHTML = "";

if (shoeList.length === 0) {
    container.innerHTML = "Nothing New Here"
}

shoeList.forEach((results) => {
    container.innerHTML += `<div class="newItem">       
                                <h2>${results.title}</h4>
                                <p>${results.price}$<p>
                                <p>${results.description}</p>
                            </div>`
});

