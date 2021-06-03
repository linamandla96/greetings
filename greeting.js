//get a reference to the greet button
var greetbtnElem = document.querySelector(".greetmebtn")
//get a referennce  to the   text box
var nameElem = document.querySelector(".nameEntered")
//get a reference to the radio button 
var radioTypebtnElem = document.querySelector(".languageType")
//get a reference to Reset button 
var resetbtnElem = document.querySelector(".resetbtn")

var displayname = document.querySelector(".displayname")
// get a reference to the counter button
var greetingCounterElem = document.querySelector(".counter")
//get a reference to errors
var erromesssegeElem = document.querySelector(".errors")
var erroElem = document.querySelector(".mes")
//add event listener to buttons

// var greetingCounter = 0;
var reg = /^[a-zA-Z]+$/

let existingNames;




if (localStorage["names"]) {

    existingNames = JSON.parse(localStorage.getItem("names"));

}


let greetFun = greet(existingNames);

greetingCounterElem.innerHTML = greetFun.counterPeople();



function radioTypebtnClicked() {
    var nameEntered = nameElem.value;

    var checkLanguage = document.querySelector("input[name = 'language']:checked")
    if (checkLanguage && nameEntered) {

        if (reg.test(nameEntered.toUpperCase())) {
            greetFun.storeNames(nameEntered)

            localStorage.setItem("names", JSON.stringify(greetFun.nameGreeted()));

            // greetingCounter++;
        }
        displayname.innerHTML = greetFun.greetpeople(nameEntered, checkLanguage.value)

    } else (displayname.innerHTML = "")



    if (checkLanguage == null) {
        erromesssegeElem.innerHTML = "select language";

    }
    if (nameEntered === "") {
        erromesssegeElem.innerHTML = "Please enter your name!";

    }


    if (checkLanguage == null && nameEntered === "") {
        erromesssegeElem.innerHTML = "Please enter your name and select language!";
    }
    setTimeout(function () {
        erromesssegeElem.innerHTML = "";
    }, 3000);

    greetingCounterElem.innerHTML = greetFun.counterPeople();

    checkLanguage = "";
    nameEntered = "";


}
   


function resetbtnClicked() {
    location.reload();
    localStorage.clear();
}





greetbtnElem.addEventListener('click', radioTypebtnClicked)
resetbtnElem.addEventListener('click', resetbtnClicked)


