let remove = document.getElementsByTagName("button")[1];

let form = document.getElementById("fill_form");

let sign_up = document.getElementById("sign_up");


// remove hide the form and display the button
remove.onclick = function() {
    form.style.display = "none";
    sign_up.style.display = "block";
}

// remove the button and dislpay the form
sign_up.onclick = function() {
    form.style.display = "block";
    sign_up.style.display = "none";
}