function greet(nameContainer) {
    var nameList = nameContainer || [];
    
    function greetpeople(name, language) {
        var upperCaseName = name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()

        if (language == "English") {

            return "Hello" + ", " + upperCaseName + "!";
        }

        if (language == "Isixhosa") {

            return "Molo" + ", " + upperCaseName + "!";
        }
        else if (language == "Sesotho") {

            return "Dumela" + ", " + upperCaseName + "!";
        }
    }
    
    function storeNames(names) {
       var upperCaseName = names.substring(0,1).toUpperCase() + names.slice(1).toLowerCase()
        if (upperCaseName) {
            if (!nameList.includes(upperCaseName)) {
                nameList.push(upperCaseName)
            }

        }
        //  return nameList;
    }
    
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