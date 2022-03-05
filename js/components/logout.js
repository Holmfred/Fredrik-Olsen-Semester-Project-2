import { clearStorage } from "../utils/storage.js";

export function logoutButton() {
    const button = document.querySelector("#logout")

    if(button) {
        button.onclick = function() {
            const doLogout = confirm("Do You Want To Log Out?")

            if(doLogout) {
                clearStorage()
                location.href ="/";
            }
        }
    }
}

