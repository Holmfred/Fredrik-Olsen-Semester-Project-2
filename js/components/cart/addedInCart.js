export function getInCart() {
    const shoes = localStorage.getItem("cartedShoes")

    if(!shoes) {
        return []
    }
    else {
        return JSON.parse(shoes);
    }
}