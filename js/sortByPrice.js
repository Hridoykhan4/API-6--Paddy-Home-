const sortBtn = document.getElementById("sort-price-btn");
const petContainer = document.getElementById("pet-container");

sortBtn.addEventListener("click", () => {
  const allCards = Array.from(petContainer.children);

  allCards.sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector(".price-container").innerText.replace("Price: ", "")
    );
    const priceB = parseFloat(
      b.querySelector(".price-container").innerText.replace("Price: ", "")
    );

    return priceB - priceA;
  });

  petContainer.innerHTML = "";
  allCards.forEach((card) => petContainer.appendChild(card));
});
