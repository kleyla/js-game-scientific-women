document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector("#container");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  const startBtn = document.querySelector("#start-btn");
  const startSection = document.querySelector("#start-section");
  const main = document.querySelector("#container");

  startBtn.addEventListener("click", () => {
    startSection.classList.remove("animate__pulse");
    startSection.classList.add("animate__backOutUp");

    setInterval(() => {
      startSection.remove();
      main.classList.remove("hidden");
      main.classList.add("animate__animated", "animate__zoomInUp");
    }, 500);
  });
});
