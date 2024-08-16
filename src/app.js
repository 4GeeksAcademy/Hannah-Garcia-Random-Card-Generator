// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
const suits = ['♥', '♠', '♣', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];

const cardElement = document.getElementById('card');
const topLeftElement = document.querySelector('.top-left');
const centerElement = document.querySelector('.center');
const bottomRightElement = document.querySelector('.bottom-right');
const generateButton = document.getElementById('generate');

function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const color = (suit === '♥' || suit === '♦') ? 'red' : 'black';
    return { suit, value, color };
}

function displayCard(card) {
    cardElement.className = `card ${card.color}`;
    topLeftElement.innerHTML = `${card.suit}`;
    centerElement.innerHTML = `${card.value}`;
    bottomRightElement.innerHTML = `${card.suit}`;
}

function generateNewCard() {
    const card = getRandomCard();
    displayCard(card);
}

// Generate a new card every 10 seconds
setInterval(generateNewCard, 10000);

// Generate a new card on button click
generateButton.addEventListener('click', generateNewCard);

// Generate a new card on page load
window.onload = generateNewCard;