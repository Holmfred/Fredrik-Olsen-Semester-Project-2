import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { featured } from "./components/index/getFeatured.js";
import { getHero } from "./components/index/getHero.js";
import createMenu from "./components/dynamicMenu.js";


const shoesUrl = baseUrl + "/products";

createMenu()

async function getLatest() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

        console.log(results)

        featured(results)
        getHero()
        

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".latest-container");
    }
    

};

getLatest()