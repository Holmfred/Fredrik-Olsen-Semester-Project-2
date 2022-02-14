import { allShoes } from "./allShoes.js";

export function searchShoes(shoe) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredShoes = shoe.filter(function (shoe) {
            if (shoe.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        allShoes(filteredShoes)
    };
}