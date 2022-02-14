import { baseUrl } from "../settings/api.js";

export function allShoes(results) {
    const container = document.querySelector(".shoe-container")

    container.innerHTML = "";

    for (let i = 0;i < results.length; i++) {
        const imgUrl = baseUrl + results[i].image.formats.large.url

        container.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${imgUrl}" class="card-img-top" alt="${results[i].image.alternativeText}">
                                    <div class="card-body">
                                        <h5 class="card-title">${results[i].title}</h5>
                                        <p class="card-price">${results[i].price}$</p>
                                        <a href="#" class="btn btn-primary">See More</a>
                                    </div>
                                </div>`
    }
}