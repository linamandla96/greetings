function greet(nameContainer) {
    var nameList = nameContainer || [];
    //create a function that greets names in different language
    function greetpeople(name, language) {

        if (language == "English") {

            return "Hello" + "," + name;
        }

        if (language == "Isixhosa") {

            return "Molo" + "," + name;
        }
        else if (language == "Sesotho") {

            return "Dumela" + "," + name;
        }
    }
    //create a function that store names
    function storeNames(names) {
        if (names) {
            if (!nameList.includes(names)) {
                nameList.push(names)
            }

        }
        //  return nameList;
    }
    //creat that return the length length of the list 
    function counterPeople() {
        return nameList.length;
    }
    function errorMesseges(names) {
        if (names === "") {
            return " Please enter your name!"

        }

    }
    function errors(language) {
        if (language === "") {
            return "Please select language!"
        }
    }
    function errorMes(names, language) {
        if (names === "" && language === "") {
            return "Please enter name and select language!"
        }
    }

    function nameGreeted(){
        return nameList;
    }


    return {
        nameGreeted,
        greetpeople,
        storeNames,
        counterPeople,
        errorMesseges,
        errors,
        errorMes,

    }
}