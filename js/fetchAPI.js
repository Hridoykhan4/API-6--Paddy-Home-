const loadCategories = async () => {
  loadSpinner(true);
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  showCategories(data.categories);
};

const loadAllPets = () => {
  loadSpinner(true);
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => showAllPets(data.pets));
};

loadAllPets();

loadCategories();
