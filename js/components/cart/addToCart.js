import { getInCart } from "./addedInCart.js";

export function addFavs() {
    const cartButton = document.querySelectorAll("button")


    cartButton.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {

        const title = this.dataset.title;
        const price = this.dataset.price;

        const currentShoes = getInCart();

        const findShoes = currentShoes.find(function(shoe) {
            return shoe.title === title;
        });


        if (!findShoes) {
            const shoe = { title: title, price: price};

            currentShoes.push(shoe);

            saveShoe(currentShoes);
            
        } else {
            const newShoe = currentShoes.filter(shoe => shoe.title !== title);
            saveShoe(newShoe);
        }
    }

    function saveShoe(shoes) {
        localStorage.setItem("cartedShoes", JSON.stringify(shoes));
    }
}