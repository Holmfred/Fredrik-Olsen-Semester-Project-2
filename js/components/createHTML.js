export function createHTML(results) {
    const container = document.querySelector(".shoe-container")

    container.innerHTML = "";

    for (let i = 0;i < results.length; i++) {
        container.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${results[i].image}" class="card-img-top" alt="${results[i].title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${results[i].title}</h5>
                                        <p class="card-text">${results[i].description}</p>
                                        <p class="card-price">${results[i].price}$</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>`
    }
}