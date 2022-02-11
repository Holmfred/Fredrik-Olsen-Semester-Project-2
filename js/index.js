import { baseUrl } from "./settings/api.js";
import { createHTML } from "./components/createHTML.js";

const shoesUrl = baseUrl + "products";

async function getShoe() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

       createHTML(results)


    } catch (error) {
        console.log(error);
    }
    

};

getShoe()