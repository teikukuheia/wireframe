var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const stories = document.getElementById("stories");

stories.addEventListener("click", goToStories);

function goToStories(){
    location.href = "stories.html";
}

const becomeHost = document.getElementById("become-a-host");

becomeHost.addEventListener("click", becomeAnHost);

function becomeAnHost(){
    location.href = "host.html";
}

const lineButton = document.querySelectorAll("#profile");
lineButton.forEach(lineButton => {
    lineButton.addEventListener("click", function(e){
        location.href = "profile.html";
    });
});

const quizSmallOption = document.querySelectorAll(".rent-option");
quizSmallOption.forEach(quizSmallOption => {
    quizSmallOption.addEventListener("click", function(e){
        if (this.classList.contains("chosen-quiz-item")){
            this.classList.remove("chosen-quiz-item");
        } else {
            this.classList.add("chosen-quiz-item");
        }
    });
});

const quizBigOption = document.querySelectorAll(".long-option");
var length = 0;
quizBigOption.forEach(quizBigOption => {
    quizBigOption.addEventListener("click", function(e){
        if (this.classList.contains("chosen-quiz-item") ){
            this.classList.remove("chosen-quiz-item");
            length--;
        } else if (length < 1) {
            this.classList.add("chosen-quiz-item");
            length++;
        }
    });
});

const item = document.querySelector(".radial-number");
const addButton = document.querySelectorAll(".plus");
const divideButton = document.querySelectorAll(".minus");

var counterNumber = 0;

addButton.forEach(addButton => {
    addButton.addEventListener("click", function(e){
        if(counterNumber != 6){
            counterNumber = isNaN(counterNumber) ? 0 : counterNumber;
            counterNumber++;
            item.innerHTML = counterNumber;
        }
    });
});

divideButton.forEach(divideButton => {
    divideButton.addEventListener("click", function(e){
        if(counterNumber >= 1){
            counterNumber = isNaN(counterNumber) ? 0 : counterNumber;
            counterNumber--;
            item.innerHTML = counterNumber;
        }
    });
});

const item2 = document.querySelector(".radial-number2");
const addButton2 = document.querySelectorAll(".plus2");
const divideButton2 = document.querySelectorAll(".minus2");

var counterNumber2 = 0;

addButton2.forEach(addButton => {
    addButton.addEventListener("click", function(e){
        if(counterNumber2 != 3){
            counterNumber2 = isNaN(counterNumber2) ? 0 : counterNumber2;
            counterNumber2++;
            item2.innerHTML = counterNumber2;
        }
    });
});

divideButton2.forEach(divideButton2 => {
    divideButton2.addEventListener("click", function(e){
        if(counterNumber2 >= 1){
            counterNumber2 = isNaN(counterNumber2) ? 0 : counterNumber2;
            counterNumber2--;
            item2.innerHTML = counterNumber2;
        }
    });
});

const item3 = document.querySelector(".radial-number3");
const addButton3 = document.querySelectorAll(".plus3");
const divideButton3 = document.querySelectorAll(".minus3");

var counterNumber3 = 0;

addButton3.forEach(addButton => {
    addButton.addEventListener("click", function(e){
        if(counterNumber3 != 3){
            counterNumber3 = isNaN(counterNumber3) ? 0 : counterNumber3;
            counterNumber3++;
            item3.innerHTML = counterNumber3;
        }
    });
});

divideButton3.forEach(divideButton3 => {
    divideButton3.addEventListener("click", function(e){
        if(counterNumber3 >= 1){
        counterNumber3 = isNaN(counterNumber3) ? 0 : counterNumber3;
        counterNumber3--;
        item3.innerHTML = counterNumber3;
        }
    });
});

const crossIconCard = document.querySelectorAll(".prop-card-cross-icon");

crossIconCard.forEach(crossIconCard => {
    crossIconCard.addEventListener("click", function(e){
        this.parentNode.remove();
    });
})

const reservationButton = document.querySelectorAll(".reservation-button");

reservationButton.forEach(reservationButton => {
    reservationButton.addEventListener("click", function(e){
        $(".add-button-banner-accept").toggle();
            this.closest(".reservation").remove();
        if ($('.reservation').length == 0) { document.querySelector(".reservations-list").innerHTML = "<h2 class='no-items'>No upcoming reservations.</h2>"; console.log("test"); }
    });
});

const removeButtonClick = document.querySelectorAll(".remove");

removeButtonClick.forEach(removeButtonClick => {
    removeButtonClick.addEventListener("click", function(e){
        this.closest(".properties-whole-card").remove();
    });
});