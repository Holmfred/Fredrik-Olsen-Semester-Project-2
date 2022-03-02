import { getInCart } from "./components/cart/addedInCart.js";

const shoeCart = getInCart()

const container = document.querySelector(".cart")

const clear = document.querySelector(".clear-storage")

if (shoeCart.length === 0) {
    container.innerHTML = "Nothing in favourites yet";
}

container.innerHTML = "";

shoeCart.forEach((results) => {
    container.innerHTML += `<div class="cartItem">
                                    <h2>${results.title}</h4>
                                    <h3>${results.price}
                                </div>`;
});

clear.addEventListener("click", clearAll)

function clearAll(){
    localStorage.clear()
    container.innerHTML = `<h3>Like the younglings, these are no more</h3>`
}