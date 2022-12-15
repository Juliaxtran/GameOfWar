let deckId = null;

 const handleClick = () => {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let deckId = data.deck_id;
        console.log(deckId);
      })
}

document.getElementById("new-deck").addEventListener("click", handleClick)