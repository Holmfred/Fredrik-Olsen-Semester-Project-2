import { baseUrl } from "../settings/api.js";
import displayMessage from "./displayMessage.js";

export async function getHero(){
    const heroUrl = baseUrl + "/home"

    try {
        const response = await fetch(heroUrl)
        const results = await response.json()

        console.log(results)

        const getImg = results.hero_banner.formats.large.url

        const heroImg = baseUrl + getImg

        console.log(heroImg)

        document.querySelector(".hero").style.cssText += `background-image: url(${heroImg})`;
    }

    catch (error) {
        console.log(error);
        displayMessage("error", error, ".hero");
    }

}