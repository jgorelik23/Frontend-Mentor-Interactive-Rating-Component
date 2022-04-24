const numBtns = document.querySelectorAll("[data-num-btn]")
const submitBtn = document.getElementById("submit-btn");

const surveyEl = document.getElementById("survey-el");
const thankYouEl = document.getElementById("thank-you-el");
const selectedNumEl = document.getElementById("selected-num-el");

let selectedRating = null;

numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedRating = btn.textContent;
    });
});

submitBtn.addEventListener("click", () => {
    if (!selectedRating) return;
    
    selectedNumEl.textContent = selectedRating;
    surveyEl.style.display = "none";
    thankYouEl.style.display = "flex";
});

// TODO: make radio buttons work fr