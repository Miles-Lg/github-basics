const date = document.querySelector(".cal-date")
const days = document.querySelectorAll(".day")

days.forEach(day => {
  day.addEventListener("click", () => {
    removeClass()
    day.classList.toggle("active")
  })
})


function removeClass() {
  days.forEach(day => {
    day.classList.remove("active")
  })
}