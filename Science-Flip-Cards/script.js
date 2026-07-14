const cards = document.querySelectorAll(".card")
const btnCheck = document.querySelector("span.check")
const btnRead = document.querySelector("span.read")
const score = document.querySelector("span.real-score")
let count = 1


cards.forEach(card => {
  const cardParent = card.closest(".card")
  const frontFace = cardParent.children[0]
  const backFace = cardParent.children[1]

  card.addEventListener('click', e => {
    isNotFlipped()
    if (e.target === frontFace && frontFace.style.transform === "") {
      frontFace.style.transform = "rotateY(-180deg)"
      backFace.style.transform = "rotateY(0deg)"
      card.style.transform = "translateY(-.5rem)"
    } else {
      clearStyle(card)
    }
  })
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
  card.style.transform = ""
}

/* Some changes will come soon*/

/* Add the checked class to the card if clicked */
document.addEventListener("click", e => {
  if (!e.target.matches("span.check")) return
  const parent = e.target.closest(".card")

  if (parent.classList.contains(".checked")) return
  parent.classList.add("checked")
  score.textContent = `${count}`
  count++
})


function isChecked() {
  // ...
}