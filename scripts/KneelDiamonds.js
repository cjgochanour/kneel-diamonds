import { DiamondSizes } from "./DiamondSizes.js";
import { JewelryStyles } from "./JewelryStyles.js";
import { Metals } from "./Metals.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";
import { JewelryType } from "./JewelryType.js";

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder();
    }
});

const diamonds = DiamondSizes();
const styles = JewelryStyles();
const metals = Metals();
const types = JewelryType();

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metals}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${diamonds}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styles}
            </section>
        </article>

        <section class="jewelryType__container">
            ${types}
        </section>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `;
};
