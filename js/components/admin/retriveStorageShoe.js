export function retriveFromStorage() {
    const newStorageShoes = localStorage.getItem("newShoes")

    if(!newStorageShoes) {
        return [];
    }

    else {
        return JSON.parse(newStorageShoes);   
    } 
}