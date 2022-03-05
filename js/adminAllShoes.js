import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { allShoes } from "./components/admin/allShoeAdmin.js";
import { searchShoes } from "./components/admin/filterAllShoeAdmin.js";

const shoesUrl = baseUrl + "/products";

async function getAdminShoe() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

        console.log(results)

        allShoes(results)
        searchShoes(results)


    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".allShoes");
    }
    

};

getAdminShoe()