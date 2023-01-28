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



    
//  /    (0[1-9]|1[0-2])\/(\d{2}[^0-9])   /g
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
    

const form = document.getElementById("form"); 
var cardno = document.getElementById("cardno"); 
const expiry = document.getElementById("expiry"); 
const cvv = document.getElementById("cvv");
const cardname = document.getElementById("cardname");  

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
    const cardnovalue= cardno.value.trim();
    const expiryvalue = expiry.value.trim();
    const cvvvalue = cvv.value.trim();
    const cardnamevalue = cardname.value.trim();
    var datesplit=expiryvalue.split('/');
    var yy = datesplit[1];
    




    if(cardnovalue.length===19 || cardnovalue.length===17)
    {
        setsuccessfor(cardno);
        console.log(cardnovalue);
    }
    else
    {
        seteerorfor(cardno);
        alert("invalid card");
        console.log(cardnovalue);
        return false;
    }

    if(!isname(cardnamevalue))
    {
        seteerorfor(cardname);
        alert("invalid name");
        return false;
    }
    else
    {
        setsuccessfor(cardname);
    } 

    if(expiryvalue === " ")
    {
        seteerorfor(expiry);
        alert("shit empty");
        return false; 
    }
    else if(!isdate(expiryvalue))
    {
        seteerorfor(expiry);
        alert("date should be in format mm/yy, should be valid");
        return false;
    }
    else if(yy<22)
    {
        seteerorfor(expiry);
        alert("shit < 22 fam fr?");
        return false;
    }
    else
    {
        setsuccessfor(expiry);
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

function isdate(email){
    console.log(email);
    // let pattern = /^(0?[1-9]|1[0-2])[\/](\d{2}[^0-9])$/
    let pattern = /^(0[1-9]|1[0-2])[\/](\d{2})$/
    console.log(pattern.test(email));
    return pattern.test(email);

}

function isname(cardname)
{
    let pattern = /^([A-Za-z]*)$/
    return pattern.test(cardname);
}




