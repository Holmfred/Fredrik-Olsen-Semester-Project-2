import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { allShoes } from "./components/getAllShoes.js";
import { searchShoes } from "./components/filteredShoes.js";

const shoesUrl = baseUrl + "/products";

async function getShoe() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

        console.log(results)

        allShoes(results)
        searchShoes(results)


    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".shoe-container");
    }
    

};

getShoe()