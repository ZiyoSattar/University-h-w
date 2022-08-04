var elForm = document.querySelector(".hero__form");
var elInput = elForm.querySelector(".hero__input");
var elSelect = document.querySelector(".universities");
var elOutput = document.querySelector(".hero__output");
var elAnswer = document.createElement("p");

elOutput.appendChild(elAnswer)
elAnswer.setAttribute("class", "text-p")

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);

  if (inputValue >= 200) {
    elAnswer.textContent = "You win Scholarship"
  }

  else if (inputValue <= 0) {
    elAnswer.textContent = "Please write a number greather than 0!"
  }

  else if(inputValue >= selectValue) {
    elAnswer.textContent = "Congratulate you Passed"
  }

  else if (isNaN(inputValue)) {
    elAnswer.textContent = "Please write a number!"
    return;
  }

  else if (isNaN(selectValue)) {
    elAnswer.textContent = "Please choose a college"
    return;
  }

  else if (inputValue < selectValue ) {
    elAnswer.textContent = "Sorry, you failed ("
    return;
  }

})