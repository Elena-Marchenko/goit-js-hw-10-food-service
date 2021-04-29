import menu from "./menu.json";
import gallery from "../templates/gallery-cards";

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup)

function createMenuCardsMarkup(menu) {
    return gallery(menu);
}
