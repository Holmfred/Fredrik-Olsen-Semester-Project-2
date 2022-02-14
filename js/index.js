import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { featured } from "./components/getFeatured.js";
import { getHero } from "./components/getHero.js";


const shoesUrl = baseUrl + "/products";

async function getLatest() {

    try {
        const response = await fetch(shoesUrl);
        const results = await response.json();

        console.log(results)

        featured(results)
        getHero()
        

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".featured-container");
    }
    

};

getLatest()