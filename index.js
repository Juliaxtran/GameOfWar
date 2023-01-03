let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingPlaceholder = document.getElementById("remaining")
const alert = document.getElementsByClassName("alert");

// Functions

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
      deckId = data.deck_id
      remainingPlaceholder.innerText = "52";
      drawCardBtn.disabled = false;

    })
}


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
    return "Card 1 wins!"
  } else if (card1Value < card2Value) {
    return "Card 2 wins!"
  } else {
    return "War"
  }
}

// Event Listeners

// Create new deck

newDeckBtn.addEventListener("click", handleClick)

// Draw cards

drawCardBtn.addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {

      let cardOne = data.cards[0]
      let cardTwo = data.cards[1]
      let remaining = data.remaining

      // Create card images
      cardsContainer.children[0].innerHTML = `
                <img src=${cardOne.image} class="card" />
            `
      cardsContainer.children[1].innerHTML = `
                <img src=${cardTwo.image} class="card" />
            `
      // Determine winner
      const winnerText = determineCardWinner(cardOne.value, cardTwo.value);
      ;
      header.innerText = winnerText;
      // Update deckInfo
      remainingPlaceholder.innerText = remaining;

      // Disable draw button if no cards left
      if (remaining === 0) {
        drawCardBtn.disabled = true
        alert[0].style.display = "block"
        setTimeout(() => {
          alert[0].style.display = "none"
        }, 3000)
      }
    })
})

