let cards = [
  {
    title: "Warsaw",
    src: "https://www.docplanner.com/images/warsaw.png",
  },
  {
    title: "Barcelona",
    src: "https://www.docplanner.com/images/barcelona.png",
  },
  {
    title: "Munich",
    src: "https://www.docplanner.com/images/munich.png",
  },
  {
    title: "Istanbul",
    src: "https://www.docplanner.com/images/istanbul.png",
  },
  {
    title: "Rome",
    src: "https://www.docplanner.com/images/rome.png",
  },
  {
    title: "Bologna",
    src: "https://www.docplanner.com/images/bologna.png",
  },
  {
    title: "Curitiba",
    src: "https://www.docplanner.com/images/curitiba.png",
  },
  {
    title: "Mexico City",
    src: "https://www.docplanner.com/images/mexico-city.png",
  },
];
let cardsContainer = document.getElementById("cards-container");

function afficherUneCarte(carte) {
  let title = carte.title;
  let src = carte.src;
  let cardHtml = `<div class="col">
<div class="card mx-auto mb-2 shadow-lg" style="width: 18rem">
  <img
    src=${src}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body d-flex justify-content-between">
    <h5 class="card-title text-muted">${title}</h5>

    <a href="#" class="btn btn-primary btn-sm text-uppercase"
      >see openings</a
    >
  </div>
</div>
</div>`;
  return cardHtml;
}
for (let carte of cards) {
  cardsContainer.innerHTML += afficherUneCarte(carte);
}
// console.log(cardsContainer.innerHTML);
let searchInput = document.getElementById("search");
console.log(searchInput);
searchInput.addEventListener("input", filtrer);
function filtrer(event) {
  // console.log("test");
  console.log(event.target.value);
  let searchValue = event.target.value.toLowerCase();
  cardsContainer.innerHTML = "";
  for (let carte of cards) {
    let title = carte.title.toLowerCase();
    if (title.includes(searchValue))
      cardsContainer.innerHTML += afficherUneCarte(carte);
  }
}

let name = "Ranime";
console.log(name.toUpperCase());
