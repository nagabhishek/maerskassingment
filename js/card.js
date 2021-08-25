// Initializing the number of cards and global reference for the container element
const numbersOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const containerNode = document.querySelector(".content");

// Addding shuffle method in Array prototype
Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * i);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

// Function to perform action - Shuffle/Sort
const performAction = (cards, actionType) => {
    let cardsToModify = [...cards];
    switch (actionType) {
        case "sort":
            cardsToModify.sort();
            break;
        case "shuffle":
            cardsToModify.shuffle();
            break;
    }
    return cardsToModify;
}

// Logic to generate cards based on action performed
const generateCards = (action) => {
    const cards = performAction(numbersOfCards, action);
    containerNode.innerHTML = "";
    cards.forEach((content) => {
        let child = document.createElement("DIV");
        child.textContent = content;
        containerNode.appendChild(child);
    });
}

// Button click listners using event delegation
document.querySelector(".action").addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (action) {
        generateCards(action);
    }
});

generateCards("sort");