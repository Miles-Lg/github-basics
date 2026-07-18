const cards = document.querySelectorAll(".card")
const btnCheck = document.querySelectorAll("span.check")
const btnRead = document.querySelectorAll("span.read")
const score = document.querySelector("span.real-score")
const progress = document.querySelector("div#progress-bar")
const congrats = document.querySelector(".congrats")
const cardNumber = document.querySelector(".cards-number")
let count = 0
let checkedCards = 0


cardNumber.textContent = cards.length


cards.forEach(card => {
  const frontFace = card.children[0]
  const backFace = card.children[1]

  card.addEventListener('click', e => {
    if (e.target.closest(".check, .read")) return
    if (card.classList.contains("checked")) return
    closeAllCards()
    card.classList.add("flipped")
    showCongratsMessage()
  })
})

document.addEventListener("click", e => {
  if (e.target.matches(".check")) { addChecked(e) }
  if (e.target.matches(".read")) { closeAllCards() }
})


/* Close a card when clicked */
function closeAllCards() {
  cards.forEach(card => {
    closeCards(card)
  })
}


/* Close all cards */
function closeCards(card) {
  card.classList.remove("flipped")
}


/* Add the checked class to the card */
function addChecked(e) {
  if (!e.target.matches("span.check")) return
  const card = e.target.closest(".card")
  if (!card) return
  if (card.classList.contains("checked")) return
  card.classList.add("checked")
  count++
  score.textContent = `${count}`
  progress.style.width = `${(count / cards.length) * 100}% `

  checkedCards++
  showCongratsMessage()
}

function showCongratsMessage() {
  if (checkedCards !== cards.length) return
  congrats.classList.remove("hidden")
  congrats.classList.add("show")
  closeAllCards()
}