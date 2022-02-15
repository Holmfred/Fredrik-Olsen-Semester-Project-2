import { specificShoe } from "./components/getShoe.js";
import { baseUrl } from "./settings/api.js";

const queryString = document.location.search;

const parms = new URLSearchParams(queryString)

const id = parms.get("id")

const shoeUrl = baseUrl + "/products" + "/" + id

async function getSpecific(){

    try {
        const response = await fetch(shoeUrl);
        const results = await response.json();
        console.log(results)
        specificShoe(results)
           
        }

        catch(error){
            console.log(error);
        }

    }

getSpecific()