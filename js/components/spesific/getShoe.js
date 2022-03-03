import { baseUrl } from "../../settings/api.js";
import { addShoes } from "../cart/addToCart.js";

export function specificShoe(results) {
    const container = document.querySelector(".specific-container")

    container.innerHTML = "";

    const imgUrl = baseUrl + results.image.formats.large.url

    container.innerHTML += `<img src="${imgUrl}" alt="${results.image.alternativeText}">
                            <div class="card-body">
                                <h2 class="card-title">${results.title}</h2>
                                <p class="card-text">${results.description}</p>
                                <p class="card-price">${results.price}$</p>
                                <button data-title="${results.title}" data-price="${results.price}" data-image="${imgUrl}">Add To Cart</button>
                            </div>`

    addShoes()
}
