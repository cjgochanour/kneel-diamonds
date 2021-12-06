import { getType, setType } from "./database.js";

const Types = getType();

document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setType(parseInt(event.target.value));
    }
});

export const JewelryType = () => {
    let typeHTML = `<ul class="JewelryType">`;

    let typesList = Types.map(
        (type) => `<div class="typeType"><li>
    <input type="radio" name="type" value="${type.id}">${type.type}
    </li></div>`
    );

    typeHTML += typesList.join("");

    typeHTML += "</ul>";

    return typeHTML;
};
