const ratingDiv = document.querySelector(".rating");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const thankYouDiv = document.querySelector(".thank-you");
const selectionSpan = document.querySelector(".selection");
let selectedRating = ""

ratingBtns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        removeSelectedClass();
        selectedRating = event.target.textContent
        event.target.classList.add("selected")
    })
})

submitBtn.addEventListener("click", function(){
    if (selectedRating === ""){
        return
    }
    ratingDiv.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
    selectionSpan.textContent = selectedRating;
})

function removeSelectedClass(){
    ratingBtns.forEach((btn)=>{
        btn.classList.remove("selected")
    })
}
