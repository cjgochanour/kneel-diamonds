import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js";

const metals = getMetals();

document.addEventListener("change", (event) => {
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value));
        document.dispatchEvent(new CustomEvent("stateChanged"));
    }
});

export const Metals = () => {
    const currentOrder = getOrderBuilder();
    let html = "<ul>";

    for (const metal of metals) {
        if (metal.id === currentOrder.metalId) {
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" id="${metal.id}" checked> ${metal.metal}
        </li>`;
        } else
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" id="${metal.id}"> ${metal.metal}
        </li>`;
    }

    html += "</ul>";
    return html;
};
