var popupCont = document.getElementById('popupContact');
var openPopupBtn = document.getElementById('popupBtn');

/* Function To Display Popup */

function divShow() {
	popupCont.style.display = "block";	
}

/* Function to Hide Popup */

function divHide() {
	popupCont.style.display = "none";
}

popupBtn.addEventListener('click', function() {
	divShow();
}, false);


function setForm() {
	/* Creating the dob list */

	var days = 31
	var months = 12
	var today = new Date()
	var year = today.getFullYear() +1 
	maxYears = 50


	/* Creating the day's list */

	for (var i = 1; i <= days; i++) {
		var dayList = document.getElementById('day')
		var option = document.createElement('option') 

		option.setAttribute('value', i)
		option.innerHTML = i
		dayList.appendChild(option)

	}

	/* Creating the month list */

	for (var i = 1; i <= months; i++) {
		var monthList = document.getElementById('month')
		var option = document.createElement('option')

		option.setAttribute('value', i)
		option.innerHTML = i
		monthList.appendChild(option)

	} 

	/* Creating the years list */

	for (var i = 0; i < maxYears; i++) {
		year--
		var yearList = document.getElementById('year')
		var option = document.createElement('option') 

		option.setAttribute('value', year)
		option.innerHTML = year
		yearList.appendChild(option)
			
	}
}
/* Error output */

function registerProfile() {
	var errorOutput = document.getElementById('error')
	var errorMesGlobal = 'Please, fill in all the fields required.'
	var errorMail = 'Make sure your email address is correct.'
	var errorPhone = 'Please enter vaild phone number of 10 digits.'

	if (!form.firstName.value || !form.lastName.value || !form.gender.value || !form.email.value || !form.phone.value) {
			
			errorOutput.innerHTML = errorMesGlobal
			return
	}
		
	if(!regExMail.test(form.email.value)) {
			errorOutput.innerHTML = errorMail
			return
	}

	if (!regExPhone.test(form.phone.value)) {
			errorOutput.innerHTML = errorPhone
			return
	} 

	/*  Creating an object */

	 var userprofile = {
	 	firstName: form.firstName.value + ' ' + form.lastName.value,
	 	lastName: form.lastName.value,
	 	gender: form.gender.value,
	 	dob: form.month.value + '/' + form.day.value + '/' + form.year.value,
	 	email: form.email.value,
	 	phone: form.phone.value,
	 }
}

//document.getElementById('register').addEventListener('click', registerProfile, false)

window.onload = setForm();


