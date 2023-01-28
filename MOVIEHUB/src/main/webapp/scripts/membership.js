var text = document.getElementById("textcolor"); 
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

    const checkvalue = checkfunction();

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
function setsuccessfor(input)
{
    const inputfield = input.parentElement;     //.input-field
    inputfield.classList.remove("error");
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