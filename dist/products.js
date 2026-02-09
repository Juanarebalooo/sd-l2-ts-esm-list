// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };
function getProductsSortedByPrice(list) {
    const copy = list.slice();
    copy.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        else if (a.price < b.price) {
            return -1;
        }
        else {
            return 0;
        }
    });
    return copy;
}
export function productsListComponent() {
    const section = document.createElement("section");
    section.style.border = "solid 1px #ccc";
    section.style.padding = "10px";
    const list = document.createElement("ul");
    const listContentSorted = getProductsSortedByPrice(productsList);
    listContentSorted.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - $${product.price}`;
        list.appendChild(listItem);
    });
    section.appendChild(list);
    return section;
}
