const querystring = window.location.search;
const URLParams = new URLSearchParams(querystring);
const names = URLParams.get("Name");
document.getElementById("Namehere").innerHTML = `By ${names}`;
document.getElementById("myInput").value = window.location;
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}