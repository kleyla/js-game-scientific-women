const data = [
  {
    question: "¿Qué crees que hizo Anna?",
    options: ["Perdono a Byron", "Dejo a Byron"],
    answer: 1,
  },
  {
    question: "Ada se dedicó a estudiar...",
    options: ["Arte", "Astronomía", "Poesía", "Química", "Matemáticas"],
    answer: 4,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector("#container");
  const audio = document.querySelector("#audio-btn");
  const audioHappy = document.querySelector("#audio-happy");
  const audioSad = document.querySelector("#audio-sad");
  const audioCelebrate = document.querySelector("#audio-celebrate");
  const sections = document.querySelectorAll("section");
  const images = document.querySelectorAll("img");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  const startBtn = document.querySelector("#start-btn");
  const startSection = document.querySelector("#start-section");
  const main = document.querySelector("#container");

  startBtn.addEventListener("click", () => {
    audio.play();
    // setInterval(() => {
    //   audioSad.play();
    // }, 300);
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
      audio.play();

      const options = document.querySelectorAll(
        `input[name="options${index + 1}"]`
      );
      const answer = data[index].answer;

      if (options[answer].checked) {
        // audioHappy.play();
        Swal.fire({
          icon: "success",
          title: "Bien hecho!",
          text: "Continua",
          customClass: {
            confirmButton: "btn-color",
          },
        });
        audioCelebrate.play();
      } else {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Sigue intentando",
          customClass: {
            confirmButton: "btn-color",
          },
        });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const currentIndex = Array.from(sections).indexOf(entry.target);
        if (entry.isIntersecting) {
          images[currentIndex].classList.add(
            "animate__fadeInLeft",
            "animate__slower"
          );
        } else {
          if (entry.boundingClientRect.y > 0) {
            images[currentIndex].classList.remove(
              "animate__fadeInLeft",
              "animate__slower"
            );
          }
        }
      });
    },
    {
      root: scrollContainer,
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
