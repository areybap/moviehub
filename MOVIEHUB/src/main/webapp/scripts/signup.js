const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

// js code to appear signup and login form
container.classList.add("active");
    



const sform = document.getElementById("signupform");
const uname = document.getElementById("uname");
const semail = document.getElementById("semail");
const spword = document.getElementById("spword");
const cpword = document.getElementById("cpword");

// Get the output text
var text = document.getElementById("textcolor");

/*sform.addEventListener("submit", (e) => {
    e.preventDefault();
    if(checkinputs()===false)
    {
        console.log("false")
    }
    else
    {
        console.log("true")
    }
})*/

 function validation()
 {
	var a=checkinputs();
	if(a===false){
     return false;
	}
	else {return true;}

}
function checkinputs()
{
    const unamevalue= uname.value.trim();
    const semailvalue= semail.value.trim();
    const spwordvalue = spword.value.trim();
    const cpwordvalue = cpword.value.trim();
    const checkvalue = checkfunction();

    if(unamevalue.length<3 || unamevalue.length>12)
    {
        seteerorfor(uname);
        alert("name length between 3 and 13");
        return false; 
        
    }
    else
    {
        setsuccessfor(uname);
        
    }

    if(semailvalue === " ")
    {
        seteerorfor(semail);
        alert("email empty");
        return false; 
    }
    else if(!isemail(semailvalue))
    {
        seteerorfor(semail);
        alert("email invalid");
        return false;
    }
    else
    {
        setsuccessfor(semail);
    }


    if(spwordvalue === " ")
    {
        seteerorfor(spword);
        return false;
    }
    else if(!strongpassword(spwordvalue))
    {
        seteerorfor(spword);
        alert("password length must 6-16 characters and must atleast consist one Capital letter, one Small letter, one number and one symbol");
        return false;
    }
    else
    {
        setsuccessfor(spword);
    }
    if(cpwordvalue === " ")
    {
        seteerorfor(cpword);
    }
    else if(spwordvalue !== cpwordvalue)
    {
        seteerorfor(spword);
        seteerorfor(cpword);
        alert("passwords must match");
        return false;
    }
    else
    {
        setsuccessfor(cpword);
    }
    if(!checkvalue)
    {
        alert("Terms and Conditions. We want to sell your data");
        text.classList.add("error")
        return false;
    }
    else
    {
        text.classList.remove("error")
    }
    

}

function seteerorfor(input)
{
    const inputfield = input.parentElement;     //.input-field
    inputfield.classList.add("error");

}
function setsuccessfor(input, message)
{
    const inputfield = input.parentElement;     //.input-field
    inputfield.classList.remove("error");
}

function isemail(email){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email);
}

function strongpassword(pword)
{
    return /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/.test(pword);
}

function checkfunction() {
    // Get the checkbox
    var checkBox = document.getElementById("sigCheck");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      return true
    }
    else {
        return false
    }

}