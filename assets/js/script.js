document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector("#container");

  scrollContainer.addEventListener("wheel", (evt) => {
    console.log("wheel");
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
});
