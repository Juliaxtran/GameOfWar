let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")

// Functions

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
      deckId = data.deck_id
    })
}

newDeckBtn.addEventListener("click", handleClick)

const determineCardWinner = (card1, card2) => {
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE"
  ]
  const card1Value = cardValues.indexOf(card1)
  const card2Value = cardValues.indexOf(card2)

  if (card1Value > card2Value) {
    console.log("Card 1 wins!")
  } else if (card1Value < card2Value) {
    console.log("Card 2 wins!")
  } else {
    console.log("It's a tie!")
  }
}



// Draw cards

drawCardBtn.addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
      let cardOne = data.cards[0]
      let cardTwo = data.cards[1]
      cardsContainer.children[0].innerHTML = `
                <img src=${cardOne.image} class="card" />
            `
      cardsContainer.children[1].innerHTML = `
                <img src=${cardTwo.image} class="card" />
            `
      determineCardWinner(cardOne.value, cardTwo.value);

    })


})

