import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/dynamicMenu.js";
import deleteButton from "./components/edit.js/delete.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";

createMenu();

const queryString = document.location.search;

const parms = new URLSearchParams(queryString)

const id = parms.get("id")

if (!id) {
    document.location.href = "/";
}

const shoeUrl = baseUrl + "/products" + "/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured")
const idInput = document.querySelector("#id")
const message = document.querySelector(".message-container");

(async function() {
    try {
        const response = await fetch(shoeUrl);
        const results = await response.json()

        title.value = results.title;
        price.value = results.price;
        description.value = results.description;
        featured.value = results.featured
        idInput.value = results.id

        deleteButton(results.id)
    }
    catch(error) {
        console.log(error)
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const featuredValue = featured.options[featured.selectedIndex].value;

    if(titleValue.length < 5 || priceValue.length < 2 || descriptionValue.length < 20) {
        return displayMessage("warning", "Please Add Valid Values", ".message-container" )
    }

    if(featuredValue === "True") {
        updateShoe(titleValue, priceValue, descriptionValue, featuredValue);
    }

    if(featuredValue === "False") {
        updateShoe(titleValue, priceValue, descriptionValue, featuredValue);
    }

}

async function updateShoe(title, price, description, featured, image) {
    const url = baseUrl + "/products" + "/" + id;

    const data = JSON.stringify({ title: title, price: price, description: description, featured: featured});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options)
        const json = await response.json();

        if(json.updated_at) {
            displayMessage("success", "Product Updated", ".message-container" )
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    }
    catch(error) {
        console.log(error);
    }
}