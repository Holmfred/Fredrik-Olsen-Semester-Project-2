import { baseUrl } from "./settings/api.js";
import { allShoes } from "./components/allShoes.js";

const shoesUrl = baseUrl + "products";

async function getShoe() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

        console.log(results)

        allShoes(results)


    } catch (error) {
        console.log(error);
    }
    

};

getShoe()