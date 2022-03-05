import { getUsername } from "../utils/storage.js";
import { logoutButton } from "./logout.js";

export default function createMenu () {
    const username = getUsername();

    let authLink = `<a href="login.html" class="nav-link" >Login</a>`

    if(username) {
        authLink = `<a href="admin.html" class="nav-link" >Admin</a>`
    }

    const container = document.querySelector(".menu-container")

    container.innerHTML =  `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="index.html">MOON Walker</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href="products.html">All Shoes</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="cart.html">Cart</a>
                                            </li>
                                            <li class="nav-item">
                                                ${authLink}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>`   
                            
                            logoutButton()

}