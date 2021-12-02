import { getOrders, getMetals, getSizes, getStyles } from "./database.js";

export const buildOrderListItem = (order) => {
    const metals = getMetals();
    const sizes = getSizes();
    const styles = getStyles();

    const foundMetal = metals.find((metal) => {
        return metal.id === order.metalId;
    });
    const foundSize = sizes.find((size) => {
        return size.id === order.sizeId;
    });
    const foundStyle = styles.find((style) => {
        return style.id === order.styleId;
    });
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    return `<li>
    Order #${order.id} cost ${costString}. 
</li>`;
};

export const Orders = () => {
    const orders = getOrders();

    let html = "<ul>";

    const listItems = orders.map(buildOrderListItem);

    html += listItems.join("");
    html += "</ul>";

    return html;
};
