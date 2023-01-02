let deckId
let cardOne = document.getElementById("card-one")
let cardTwo = document.getElementById("card-two")

const handleClick = () => {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      deckId = data.deck_id;
    })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json())
      .then(data => {
        cardOne.innerHTML = `<img src="${data.cards[0].image}">`
        cardTwo.innerHTML = `<img src="${data.cards[1].image}">`
      })
})


