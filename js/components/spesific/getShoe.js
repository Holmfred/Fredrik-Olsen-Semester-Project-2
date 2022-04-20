import { baseUrl } from "../../settings/api.js";
import { addShoesToCart } from "../cart/addToCart.js";

export function specificShoe(results) {
    const container = document.querySelector(".specific-container")

    container.innerHTML = "";

    const imgUrl = baseUrl + results.image.formats.large.url

    container.innerHTML += `<img src="${imgUrl}" alt="${results.description}">
                            <div class="card-body">
                                <h1>${results.title}</h1>
                                <p class="card-text">${results.description}</p>
                                <p class="card-price">${results.price}$</p>
                                <button data-title="${results.title}" data-price="${results.price}" data-image="${imgUrl}">Add To Cart</button>
                            </div>`

    addShoesToCart()
}
