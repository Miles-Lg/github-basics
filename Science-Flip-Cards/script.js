const cards = document.querySelectorAll(".card")
const btnCheck = document.querySelectorAll("span.check")
const btnRead = document.querySelectorAll("span.read")
const score = document.querySelector("span.real-score")
const progress = document.querySelector(".real-score")
let count = 0


document.addEventListener('click', e => {
  // console.log()
})

cards.forEach(card => {
  const cardParent = card.closest(".card")
  const frontFace = cardParent.children[0]
  const backFace = cardParent.children[1]

  card.addEventListener('click', e => {
    removeEvent(cardParent)
    if (!(e.target.matches(".grid-item") || e.target.matches("p") || e.target.matches(".item-text"))) return
    isNotFlipped()
    frontFace.style.transform = "rotateY(-180deg)"
    backFace.style.transform = "rotateY(0deg)"
  })
})

btnRead.forEach(btn => {
  btn.addEventListener('click', isNotFlipped)
})


btnCheck.forEach(btn => {
  btn.addEventListener('click', addChecked)
  isNotFlipped()
})


/* Flipped back when another card is clicked */
function isNotFlipped() {
  cards.forEach(card => {
    clearStyle(card)
  })
}


/* Clear all the transform property */
function clearStyle(card) {
  card.closest(".card").children[0].style.transform = ""
  card.closest(".card").children[1].style.transform = ""
}


/* Add the checked class to the card if clicked */
function addChecked(e) {
  const isTrue = e.target.closest(".card")
  if (!e.target.matches("span.check")) return
  if ((!isTrue && isTrue.classList.contains(".checked"))) return
  isTrue.classList.add("checked")
  removeEvent(isTrue)
}


function removeEvent(cardParent) {
  if (!cardParent.classList.contains(".checked")) return
  cardParent.children.removeEventListener('click')
  // card.removeEventListener('click')
}


// score.textContent = `${count}`
// count++

// git & github video -> [53-54]