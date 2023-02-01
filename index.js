function validateName(){
	var nameField = document.getElementById('name');
	var validName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	var errorName = document.getElementById('nameError');

	if(nameField.value == 0){
		errorName.innerHTML = "Rellene este campo";
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("invalid");
		nameField.classList.remove("errorIcon");
		errorName.innerHTML = "";
		nameField.classList.add("valid");
		nameField.classList.add("successIcon");
		return true; 
	}
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; }
	}
function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	var errorEmail = document.getElementById('emailError');

	if(emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
	else if(validEmail.test(emailField.value) ){
		emailField.classList.remove("invalid");
		emailField.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
		emailField.classList.add("valid");
		emailField.classList.add("successIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido";
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
} 

function validatePassword(){
	var passwordField = document.getElementById('password');
	var validPassword = /^.{1,8}$/;
	var errorPassword = document.getElementById('passError');

	if(passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo";
		passwordField.classList.add("invalid");
		passwordField.classList.add("errorIcon");
		return false; }
	else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("invalid");
		passwordField.classList.remove("errorIcon");
		errorPassword.innerHTML = "";
		passwordField.classList.add("valid");
		passwordField.classList.add("successIcon");
		return true; 
	}
	else {	
		errorPassword.innerHTML = "No debe tener más de 8 caracteres";
		passwordField.classList.add("invalid");
		return false; }
}

function validateConfirm(){
	var passwordField = document.getElementById('password');
	var confirmField = document.getElementById('confirm');
	var errorConfirm = document.getElementById('confirmError');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("invalid");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("valid");
		confirmField.classList.add("successIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false; 
	} 
}

function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}
borderButton()

function validateForm(){

	if (validateConfirm() && validatePassword() && validateEmail() && validateName()){
		alert("La inscripción se ha realizado correctamente");
		return true; }
	else {
		return false; }
}
