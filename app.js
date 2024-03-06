let cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random());
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
console.log(cardArray);

const gridDisplay = document.querySelector('#grid'); //get the div tag.
const resultDisplay = document.querySelector('#result'); //get the span tag for score


function createBoard() {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card); //append img tags(card) into div tag.
    }
}
createBoard();


function checkMatch() {

    const cards = document.querySelectorAll('#grid img');//get all the img tags.
    console.log(cards);

    if (cardsChosenIds[0] == cardsChosenIds[1]) { //same card
        alert('you clicked on the same card');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
    }
    else if (cardsChosen[0] == cardsChosen[1]) {  //matching cards
        alert('you found a match');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        console.log(cardsWon);
        console.log(cardsWon.length);
    }
    else                                          //not a match
    {
        alert('Sorry try again');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    }
    resultDisplay.textContent = cardsWon.length; //span tag's text content 
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations you found them all!';
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');//get the data-id attribute of the image you click on.
    cardsChosenIds.push(cardId);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);//change the src attribute of the img tag(card) you click on, with cardArray[cardId]'s img attribute.
    cardsChosen.push(cardArray[cardId].name);//push cardArray[cardId]'s name into an array.
    console.log(cardsChosen);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}