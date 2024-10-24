// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const phoneSelected = document.querySelector("#phone-select .selected");
  const phoneOptionsContainer = document.querySelector(
    "#phone-select .options"
  );
  const phoneOptionsList = document.querySelectorAll("#phone-select .option");

  phoneSelected.addEventListener("click", () => {
    phoneOptionsContainer.style.display =
      phoneOptionsContainer.style.display === "block" ? "none" : "block";
  });

  phoneOptionsList.forEach((option) => {
    option.addEventListener("click", () => {
      phoneSelected.querySelector("span").textContent = option.dataset.value;
      const flagImage = option.querySelector(".country-flag").src;
      phoneSelected.querySelector(".country-flag").src = flagImage;
      phoneOptionsContainer.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (!phoneSelected.contains(e.target)) {
      phoneOptionsContainer.style.display = "none";
    }
  });

  const currencySelected = document.querySelector("#currency-select .selected");
  const currencyOptionsContainer = document.querySelector(
    "#currency-select .options"
  );
  const currencyOptionsList = document.querySelectorAll(
    "#currency-select .option"
  );

  currencySelected.addEventListener("click", () => {
    currencyOptionsContainer.style.display =
      currencyOptionsContainer.style.display === "block" ? "none" : "block";
  });

  currencyOptionsList.forEach((option) => {
    option.addEventListener("click", () => {
      currencySelected.querySelector("span").textContent = option.dataset.value;
      currencyOptionsContainer.style.display = "none";
    });
  });
  const countrySelected = document.querySelector("#country-select .selected");
  const countryOptionsContainer = document.querySelector(
    "#country-select .options"
  );
  const countryOptionsList = document.querySelectorAll(
    "#country-select .option"
  );
  countrySelected.addEventListener("click", () => {
    countryOptionsContainer.style.display =
      countryOptionsContainer.style.display === "block" ? "none" : "block";
  });
  countryOptionsList.forEach((option) => {
    option.addEventListener("click", () => {
      countrySelected.querySelector("span").textContent = option.dataset.value;
      countryOptionsContainer.style.display = "none";
    });
  });
  window.addEventListener("click", (e) => {
    if (!currencySelected.contains(e.target)) {
      currencyOptionsContainer.style.display = "none";
    }
    if (!countrySelected.contains(e.target)) {
      countryOptionsContainer.style.display = "none";
    }
  });
});
const element = document.getElementById("phone");
const maskOptions = {
  mask: "(000)000-00-00",
};
const mask = IMask(element, maskOptions);
