const lform = document.getElementById("loginform");
const iemail = document.getElementById("iemail");
const ipword = document.getElementById("ipword");




function showerror()
{
    seteerorfor(iemail);
    seteerorfor(ipword);
}

function seteerorfor(input)
{
    var inputfield = input.parentElement;     //.input-field
    inputfield.classList.add("error");

}
function setsuccessfor(input)
{
    var inputfield = input.parentElement;     //.input-field
    inputfield.classList.remove("error");
}
