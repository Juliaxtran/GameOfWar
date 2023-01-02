let deckId = null;


const handleClick = () => {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let deckId = data.deck_id;
      drawCard(deckId);
    })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// Draw 2 new cards from the deck

const drawCard = (deckId) => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}



