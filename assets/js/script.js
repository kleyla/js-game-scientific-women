const data = [
  {
    question: "¿Qué crees que hizo Anna?",
    options: ["Perdono a Byron", "Dejo a Byron"],
    answer: 1,
  },
  {
    question: "Ada se dedicó a estudiar...",
    options: ["Arte", "Astronomía", "Poesía", "Química", "Matemáticas"],
    answer: 0,
  },
];

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
    // startSection.classList.remove("animate__pulse");
    startSection.classList.add("animate__animated", "animate__backOutUp");

    setInterval(() => {
      startSection.remove();
      main.classList.remove("hidden");
      main.classList.add("animate__animated", "animate__zoomInUp");
    }, 500);
  });

  const forms = document.querySelectorAll("form");

  forms.forEach((form, index) => {
    if (index % 2 === 0) {
      form.classList.add("rotate-right");
    } else {
      form.classList.add("rotate-left");
    }
    const question = document.querySelector(`#question${index + 1}`);
    question.textContent = data[index].question;
    const options = document.querySelector(`#options${index + 1}`);
    data[index].options.forEach((option) => {
      const label = `<label for="${option}">${option}</label><br />`;
      const input = `<input type="radio" name="options${
        index + 1
      }" value="${option}" />`;
      options.innerHTML += input;
      options.innerHTML += label;
    });
  });

  forms.forEach((form, index) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const options = document.querySelectorAll(
        `input[name="options${index + 1}"]`
      );
      const answer = data[index].answer;

      if (options[answer].checked) {
        Swal.fire({
          icon: "success",
          title: "Bien hecho!",
          text: "You clicked the button!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Error!",
        });
      }
    });
  });
});
