const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const female = document.getElementById("female");
const male = document.getElementById("male");
const national = document.getElementById("national");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const address = document.getElementById("address");
const checkboxs = document.querySelectorAll(".checkboxs");
const infoIndicate = document.getElementById("info");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(e);

	// Fname
	if (fname.value === "") {
		console.log("Pls enter your first name");
	} else {
		console.log(`FirstName: ${fname.value}`);
	}

	// check gender
	if (female.checked == true) {
		console.log(`Gender: ${female.value}`);
	} else if (male.checked == true) {
		console.log(`Gender: ${male.value}`);
	}

	// Lname
	if (lname.value === "") {
		console.log("Pls enter your last name");
	} else {
		console.log(`LasrName: ${lname.value}`);
	}

	// check national
	if (national) {
		console.log(`Nationality: ${national.value}`);
	}

	// address
	if (address.value === "") {
		console.log("Pls enter your address");
	} else {
		console.log(`Address ${address.value}`);
	}

	//medical history
	for (let i = 0; i < checkboxs.length; i++) {
		let medicalHis = [];
		if (checkboxs[i].checked == true) {
			medicalHis.push(checkboxs[i].value);
			console.log(`Medical History: ${medicalHis}`);
		}
	}

	//Current Medication
	if (yes.checked == true) {
		console.log(`currently taking medication: ${yes.value}`);
	} else if (no.checked == true) {
		infoIndicate.setAttribute("disable");
		console.log(`currently taking medication: ${no.value}`);
	}

	// address
	if (infoIndicate.value === "") {
		console.log("Pls give your indicate ");
	} else {
		console.log(`indicate ${infoIndicate.value}`);
	}
});
