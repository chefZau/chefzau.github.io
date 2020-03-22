function scroll() {
    var t = window.scrollY;
    var soup = document.getElementById("scroooo");
    if (t > 6000) {
        soup.style.transform = "scale(2, 2)";
    }
}

var password = document.getElementById("password"),confirm_password = document.getElementById("confirm_password");

function validatePassword() {
	if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
		confirm_password.setCustomValidity('');
	}
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

