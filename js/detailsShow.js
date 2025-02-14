const showDetails = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pet/${id}`
    );
    const data = await res.json();
    showDataInModal(data.petData);
  } catch (err) {
    alert("Data Finding");
  }
};

const showDataInModal = (pet) => {
  const modalContainer = document.getElementById("modal-body");
  modalContainer.innerHTML = `
    <img class="w-full" src="${pet.image}" />
    <div>
        <h3 class="text-lg font-semibold my-2">${pet.pet_name}</h3>
        <div class="grid grid-cols-2 justify-between my-1">
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
          <i class="fa-solid fa-shield-cat"></i><span> Price: ${pet.price || 'Updating'}
      </div>
      <div class="mt-3 flex items-center gap-3 font-semibold text-gray-600 ">
          <i class="fa-solid fa-syringe"></i><span> vaccinated_status: ${pet.vaccinated_status || 'N/A'}
      </div>
        </div>

          <hr class="border my-4 border-black opacity-15">

        <p class="font-bold text-lg">Details Information</p>
        <p>${pet.pet_details}</p>

    </div>
    `;
  myModal.showModal();
};

/* 
{
    "petId": 2,
    "breed": "Siamese",
    "category": "Cat",
    "date_of_birth": "2022-09-05",
    "price": 800,
    "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
    "gender": "Female",
    "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Mia"
}

*/
