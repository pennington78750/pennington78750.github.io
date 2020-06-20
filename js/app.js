const cards = document.querySelectorAll(".card");

function selectItem() {
    removeSelectItem();
    this.classList.add("active");
}

function removeSelectItem() {
    cards.forEach(card => card.classList.remove("active"));
}
cards.forEach(card => card.addEventListener("mouseover", selectItem));
