const div = document.querySelector(".mask");
const npt = document.querySelectorAll(".inputlayout");
npt[0].focus();
const divresult = document.createElement("div");
divresult.style.border = "0px";
divresult.style.padding = "0px";
divresult.style.width = "auto";
function calcola() {
	divresult.innerHTML = "";
	const a = Number(npt[0].value);
	const b = Number(npt[1].value);
	const c = Number(npt[2].value);
	const delta = b * b - 4 * a * c;
	if (a == "" || b == "" || c == "") {
		alert("Compile ALL form fields and press Calculate button");
	} else if (delta >= 0) {
		let rt1 = (-b + delta ** 0.5) / (2 * a);
		let rt2 = (-b - delta ** 0.5) / (2 * a);
		if (rt1 % 1 == 0 || rt2 % 1 == 0) {
			const tpt1 = document.createElement("h4");
			const tpt1_text = document.createTextNode(`x1 = ${rt1}`);
			tpt1.appendChild(tpt1_text);
			const tpt2 = document.createElement("h4");
			const tpt2_text = document.createTextNode(`x2 = ${rt2}`);
			tpt2.appendChild(tpt2_text);
			divresult.appendChild(tpt1);
			divresult.appendChild(tpt2);
			div.appendChild(divresult);
		} else {
			const tpt1 = document.createElement("h4");
			const tpt1_text = document.createTextNode(`x1 = ${rt1.toFixed(3)}`);
			tpt1.appendChild(tpt1_text);
			const tpt2 = document.createElement("h4");
			const tpt2_text = document.createTextNode(`x2 = ${rt2.toFixed(3)}`);
			tpt2.appendChild(tpt2_text);
			divresult.appendChild(tpt1);
			divresult.appendChild(tpt2);
			div.appendChild(divresult);
		}
	} else {
		const tpt1 = document.createElement("h5");
		const tpt1_text = document.createTextNode(`Irreal Solutions`);
		tpt1.appendChild(tpt1_text);
		divresult.appendChild(tpt1);
		div.appendChild(divresult);
	}
}

for (let i=0; i<npt.length; i++)
npt[i].addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		npt[3].click();
	}
});
npt[3].addEventListener("click", calcola);