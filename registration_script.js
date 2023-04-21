"use strict"
let signform = document.getElementById("form_reg");
signform.addEventListener("submit", (e) =>{
    let signupdata = {
        login: document.getElementById("login").value,
        firstname: document.getElementById("firstname").value,
        surname: document.getElementById("surname").value,
        gender: document.querySelector("input[name='gender']:checked").value,
        mail: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confpassword: document.getElementById("confirmpassword").value
    }

        let correctforms = 0;

        if(signupdata.login==""){
            document.getElementById("outlogin").innerHTML = "Please fill in this field"
        }
        else if(signupdata.login.length >= 20){
            document.getElementById("outlogin").innerHTML = "Your login must be shorter than 20 symbols"
        }
        else if(signupdata.login.length <=3){
            document.getElementById("outlogin").innerHTML = "Your login must be longer than 3 symbols";
        }   
        else{
            document.getElementById("outlogin").innerHTML = "Accepted";
            document.getElementById("outlogin").style.color = "green";
            correctforms++;
        }
    
        if(signupdata.firstname==""){
            document.getElementById("outfirstname").innerHTML = "Please fill in this field"
        }
        else if(signupdata.firstname.length >= 30){
            document.getElementById("outfirstname").innerHTML = "Your name must be shorter than 30 symbols"
        }
        else if(signupdata.firstname.length < 1){
            document.getElementById("outfirstname").innerHTML = "Your name must be longer than 1 symbols";
        }
        else{
            document.getElementById("outfirstname").innerHTML = "Accepted";
            document.getElementById("outfirstname").style.color = "green";
            correctforms++;
        }
    
        if(signupdata.surname==""){
            document.getElementById("outsurname").innerHTML = "Please fill in this field"
        }
        else if(signupdata.surname.length >= 30){
            document.getElementById("outsurname").innerHTML = "Your surname must be shorter than 30 symbols"
        }
        else if(signupdata.surname.length < 1){
            document.getElementById("outsurname").innerHTML = "Your surname must be longer than 1 symbols";
        }
        else{
            document.getElementById("outsurname").innerHTML = "Accepted";
            document.getElementById("outsurname").style.color = "green";
            correctforms++;
        }
    
        if(signupdata.mail == ""){
            document.getElementById("outemail").innerHTML = "Please fill in this field";
        }
        else{
            document.getElementById("outemail").innerHTML = "Accepted";
            document.getElementById("outemail").style.color = "green";
            correctforms++;
        }
        
        if(signupdata.password==""){
            document.getElementById("outpassword").innerHTML = "Please fill in this field";
        }
        else if(signupdata.password.length<=5){
            document.getElementById("outpassword").innerHTML = "Your password must be longer than 5 symbols";
        }
        else if(signupdata.password.length>=30){
            document.getElementById("outpassword").innerHTML = "Your password must be shorter than 30 symbols";
        }
        else{
                document.getElementById("outpassword").innerHTML = "Accepted";
                document.getElementById("outpassword").style.color = "green";
                correctforms++;
        }
    
        if(signupdata.confpassword==""){
            document.getElementById("outconfpassword").innerHTML = "Please fill in this field";
        }
        else if(signupdata.confpassword!==signupdata.password){
            document.getElementById("outconfpassword").innerHTML = "Passwords must match each other";
        }
        else{
            document.getElementById("outconfpassword").innerHTML = "Accepted";
            document.getElementById("outconfpassword").style.color = "green";
            correctforms++;
        }
        if(correctforms == 6){
            fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(register),
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(res => res.json())
        }
    }
);