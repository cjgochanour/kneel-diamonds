import { getStyles, setStyle, getOrderBuilder } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {
    if (event.target.name === "style") {
        setStyle(parseInt(event.target.value));
        document.dispatchEvent(new CustomEvent("stateChanged"));
    }
});

export const JewelryStyles = () => {
    const currentOrder = getOrderBuilder();
    let html = `<ul>`;

    let listItems = styles.map((style) => {
        if (style.id === currentOrder.styleId) {
            return `<li>
            <input type="radio" name="style" value="${style.id} id="style--${style.id}" checked> ${style.style}
        </li>`;
        } else
            return `<li>
            <input type="radio" name="style" value="${style.id} id="style--${style.id}"> ${style.style}
        </li>`;
    });

    html += listItems.join("");

    html += "</ul>";

    return html;
};
