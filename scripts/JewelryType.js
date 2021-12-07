import { getOrderBuilder, getType, setType } from "./database.js";

const Types = getType();

document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setType(parseInt(event.target.value));
        document.dispatchEvent(new CustomEvent("stateChanged"));
    }
});

export const JewelryType = () => {
    const currentOrder = getOrderBuilder();
    let typeHTML = `<ul class="JewelryType">`;

    let typesList = Types.map((type) => {
        if (type.id === currentOrder.typeId) {
            return `<div class="typeType"><li>
                <input type="radio" name="type" value="${type.id} id="type--${type.id}" checked>${type.type}
                </li></div>`;
        } else
            return `<div class="typeType"><li>
    <input type="radio" name="type" value="${type.id} id="type--${type.id}">${type.type}
    </li></div>`;
    });

    typeHTML += typesList.join("");

    typeHTML += "</ul>";

    return typeHTML;
};
