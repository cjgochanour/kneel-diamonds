import { getStyles } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {});

export const JewelryStyles = () => {
    let html = "<ul>";

    const listItems = styles.map((style) => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`;
    });

    html += listItems.join("");

    html += "</ul>";
    return html;
};
