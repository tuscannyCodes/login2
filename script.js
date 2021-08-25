'use strict';

//ATTATCH

const emailBox = document.getElementById("emailBox");
const userNameBox = document.getElementById("userNameBox");
const passwordBox = document.getElementById("passwordBox");
const mainButton = document.getElementById("mainButton");
const errorMessageBox = document.getElementById("errorContainer");
const errorMessage = document.getElementById("errorMessage");
const signUpBox = document.getElementById("signupBox")
const signUpHeader = document.getElementById("signUpHeader")
const mainButtonDiv = document.getElementById("mainButtonDiv")
//ATTATCH END

//VARIABLES
let userName = false;
let email = false;
let password = false;
let fields;
let timeToLogIn = 0;



//VARIABLES END
//MAIN FUNCTION
const signUpToday = () => {


    if (emailBox.value.includes("@") && emailBox.value.includes(".com"))
    //EMAIL
    {
        email = emailBox.value;

    }
    if (email == false) {
        errorMessageBox.classList.add("errorView")
        errorMessage.innerHTML = "Please enter a valid email";
        userName = false;
        password = false;

    };
    //USERNAME
    if (userNameBox.value != "") {

        userName = userNameBox.value;

        console.log(userName);
    }
    if (userNameBox.value === "") {
        errorMessageBox.classList.add("errorView")
        errorMessage.innerHTML = "Please enter a Username";
        email = false;
        password = false;

    };
    //PASSWORD
    if (passwordBox.value.length > 7) {

        password = passwordBox.value;


    }
    if (passwordBox.value.length < 7) {
        errorMessageBox.classList.add("errorView")
        errorMessage.innerHTML = "Password must be at least 7 characters";
        userName = false;
        email = false;
    };

    if (passwordBox.value == "" && userNameBox.value === "" && emailBox.value == "") {

        errorMessageBox.classList.add("errorView")
        errorMessage.innerHTML = "Please enter the required fields";
    }



    //ERROR MESSAGE NULL
    setTimeout(function () {
        errorMessageBox.classList.remove("errorView")
    }, 3000)
    //LOG IN FUNCTIONALITY
    if (password && userName && email) {

        emailBox.value = "";
        userNameBox.value = "";
        passwordBox.value = "";
        signUpHeader.innerHTML = "log In"
        signUpBox.removeChild(emailBox);
        mainButtonDiv.removeChild(mainButton);
        passwordBox.setAttribute("type", "password")

        // LETS CREATE LOG IN BUTTON 
        let logInButton = document.createElement("button");
        logInButton.innerHTML = "Log In";
        logInButton.setAttribute("id", "logInButton")
        mainButtonDiv.appendChild(logInButton);
        logInButton.addEventListener("click", logIn);

        timeToLogIn = 1;
        console.log(userName)
    }
}



function logIn() {
    if (timeToLogIn === 1 && userNameBox.value === userName && passwordBox.value === password) {
        console.log("goodtogo")
        window.open('https://designamite.co.uk', '_blank');


    } else {
        errorMessageBox.classList.add("errorView")
        errorMessage.innerHTML = "Password or username is incorrect"
        setTimeout(function () {
            errorMessageBox.classList.remove("errorView")
        }, 3000)
    }
    console.log(userName)
}
//MAIN FUNCTION END



mainButton.addEventListener("click", signUpToday);


