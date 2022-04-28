function Bourger() {
    let list_items = document.getElementById("header__list-items");
    let social = document.getElementById("header__s");
    let list = document.getElementById("header__l");
    let head = document.getElementById("head");

    if (list_items.style.display === "none") {
        list_items.style.display = "flex";
        social.style.display = "flex";
        list.style.gap = "42px";
        head.style.backgroundColor = "#141C24";

    } else {
        list_items.style.display = "none";
        social.style.display = "none";
        list.style.gap = "582px";
        head.style.backgroundColor = "rgba(255,255,255, 0.0";

    }
}