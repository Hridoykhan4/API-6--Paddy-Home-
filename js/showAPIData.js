// Show Categories section
const showCategories = (petCategories) => {
  const petCategoryContainer = document.getElementById(
    "show-pet-category-container"
  );
  petCategories.forEach((pet) => {
    const { id, category, category_icon } = pet;
    const div = document.createElement("div");
    div.setAttribute("id", `btn-${id}`);
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
      "hover:shadow-xl",
      "btn",
      "w-full",
      "h-full",
      "same-btn"
    );

    div.addEventListener("click", () => {
      getSpecificDataByAPI(`${category}`, `${id}`);
    });

    div.innerHTML = `
        <img src="${category_icon}" alt="${category_icon}'s photo is loading" />
        <h3 class="font-bold text-xl">${category}</h3>
        `;
    petCategoryContainer.appendChild(div);
  });
  loadSpinner(false);
};

const removeAllBtnColors = () => {
  const sameBtn = document.querySelectorAll(".same-btn");
  for (const btn of sameBtn) {
    btn.classList.remove("btn-primary", "hover:bg-sky-700");
  }
};

// Fetches data of pets under a specific category
const getSpecificDataByAPI = async (categoryName, id) => {
  removeAllBtnColors();
  const activeBtn = document.getElementById(`btn-${id}`);
  activeBtn.classList.add("btn-primary", "hover:bg-sky-700");

  loadSpinner(true);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  );
  const data = await res.json();
  document.getElementById("pet-container").innerHTML = "";
  setTimeout(() => {
    showAllPets(data.data);
  }, 2000);
};

// Show Pet Section

const showAllPets = (allPets) => {
  const petContainer = document.getElementById("pet-container");
  petContainer.innerText = "";

  if (!allPets.length) {
    loadSpinner(false);
    petContainer.classList.remove("grid");
    petContainer.innerHTML = `
   <div class="flex justify-center items-center">
    <div>
     <img class="w-1/2 object-cover " src="../images/error.webp"/>
     <h3 class="font-bold text-3xl">No Information Available</h3>
    </div>
   </div>
    `;
  } else {
    petContainer.classList.add("grid");
  }

  allPets.forEach((pet) => {
    const div = document.createElement("div");
    div.className = `card bg-base-100 shadow-xl border-2 border-gray-100`;
    div.innerHTML = `
       <figure class="px-4 pt-5">
    <img
      src="${pet.image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="px-4 my-2">
        <h3 class="text-lg font-semibold">${pet.pet_name}</h3>
      <div class="mt-3 flex items-center gap-3 font-semibold text-gray-600 ">
          <i class="fa-solid fa-shield-cat"></i><span> Breed: ${
            pet.breed || "N/A"
          }
      </div>
      <div class="mt-3 flex items-center gap-3 font-semibold text-gray-600 ">
          <i class="fa-regular fa-calendar"></i><span> Birth: ${
            pet.date_of_birth || "N/A"
          }
      </div>
      <div class="mt-3 flex items-center gap-3 font-semibold text-gray-600 ">
          <i class="fa-solid fa-mars-and-venus"></i><span> Gender: ${
            pet.gender || "N/A"
          }
      </div>
      <div class="mt-3 flex items-center gap-3 font-semibold text-gray-600 ">
          <i class="fa-solid fa-shield-cat"></i><span> <span class="price-container">Price: ${
            pet.price
          }</span>
      </div>

      <p class="border-t-2 border-black/10 mt-4">

      <div class="flex justify-between flex-wrap gap-2 mt-3">
            <div onclick="handleSelect('${pet.image}', '${
      pet.petId
    }', this)" class="border rounded-md ">
              <i class="fa-regular btn p-1 fa-thumbs-up text-2xl  flex justify-center items-center cursor-pointer"></i>
            </div>
            <div onclick="adoptBtnHandler(this)" class="border rounded-md ">
             <button class=" btn p-1 text-[#0E7A81] text-xl">Adopt</button>
            </div>
            <div onclick="showDetails('${
              pet.petId
            }')" class="border rounded-md ">
             <button class=" btn p-1 text-[#0E7A81] text-xl">Details</button>
            </div>
      </div>
  </div>
       `;

    petContainer.appendChild(div);
    petContainer.classList.add("border", "border-gray-100");
    loadSpinner(false);
  });
};

// Selected Pets

const validate = [];
const handleSelect = (pet_image, id, e) => {
  if (!validate.includes(id)) {
    e.childNodes[1].className = `fa-solid btn p-1 fa-thumbs-up text-2xl  flex justify-center items-center cursor-pointer`;
    const selectedPet = document.getElementById("selected-pet");
    const div = document.createElement("div");
    div.className = `p-4`;
    div.innerHTML = `
      <img class="rounded-lg " src="${pet_image}" />
      `;
    selectedPet.appendChild(div);
    validate.push(id);
    selectedPet.classList.add("border", "border-gray-100");
  } else {
    alert("Can Not Select a pet twice");
  }
};
