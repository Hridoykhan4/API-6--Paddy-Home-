let count = 3;
const adoptBtnHandler = (e) => {
  setTimeout(() => {
    e.style.display = "none";
    showDone(e);
  }, 4000);
  e.style.pointerEvents = "none";
  const countdownContainer = document.getElementById("countdown");
  newModal.showModal();
  countdownContainer.innerText = count;
  const intervalId = setInterval(() => {
    count--;
    countdownContainer.innerText = count;

    if (count <= 0) {
      clearInterval(intervalId);
      newModal.close();
      count = 3;
    }
  }, 1000);
};

const showDone = (e) => {
  e.style.display = "flex";
  e.innerText = "Adopted";
  e.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "btn",
    "btn-success",
    "text-white"
  );
};
