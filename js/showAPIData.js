const showCategories = (petCategories) => {
  const petCategoryContainer = document.getElementById(
    "show-pet-category-container"
  );
  petCategories.forEach((pet) => {
    const { category, category_icon } = pet;
    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "md:px-10",
      "py-5",
      "border-gray-200",
      "flex",
      "items-center",
      "justify-center",
      "rounded-lg",
      "cursor-pointer",
      "hover:bg-sky-100",
      "transition-all",
      "duration-400",
      "ease-linear",
      "gap-2",
      "hover:shadow-xl"
    );
    div.innerHTML = `
        <img src="${category_icon}" alt="${category_icon}'s photo is loading" />
        <h3 class="font-bold text-xl">${category}</h3>
        `;
    petCategoryContainer.appendChild(div);
  });
};

/* 
{
    "id": 1,
    "category": "Cat",
    "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
}
*/
