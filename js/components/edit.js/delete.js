import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton(id) {
    const button = document.querySelector("#remove");

    button.onclick = async function () {

        const doDelete = confirm("Delete?");

        if(doDelete) {
            const url = baseUrl + "/products/" + id;

            const token = getToken()
    
            const options = {
                method: "DELETE",
                headers: {
                    Autorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await fetch(url, options)
                const results = await response.json()

                location.href = "admin.html";
            }
            catch(error) {
    
            }
        }

        
    }
}