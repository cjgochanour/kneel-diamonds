import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js";

const sizes = getSizes();

document.addEventListener("change", (event) => {
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value));
        document.dispatchEvent(new CustomEvent("stateChanged"));
    }
});

export const DiamondSizes = () => {
    const order = getOrderBuilder();
    let html = "<ul>";

    const listItems = sizes.map((size) => {
        if (size.id === order.sizeId) {
            return `<li>
        <input type="radio" name="size" value="${size.id}" id="size--${size.id}" checked> ${size.carets}
    </li>`;
        } else
            return `<li>
            <input type="radio" name="size" value="${size.id}" id="size--${size.id}"> ${size.carets}
        </li>`;
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
};
