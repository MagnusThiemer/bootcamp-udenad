
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// variabel, der indeholder p tagget i markuppen
	let textCount = document.querySelector('#text-count');
	let count = 5;

	//funktion der indsætter tallet 5 i textCount variablen samt invoke funktionen bagefter
	function setCount(){
		textCount.innerHTML = count;
	}
	setCount();

	//event listener med funktion der formindsker værdien med 1, hvis værdien er over 0
	document.querySelector('#btn-count-decrease').addEventListener('click', () => {
		if (count > 0){
			count--;
			setCount();
		}
	})

	//event listener med funktion der forhøjer værdien med 1, hvis værdien er under 10
	document.querySelector('#btn-count-increase').addEventListener('click', () => {
		if (count < 10){
			count++;
			setCount();
		}
	})

}); // Afslutter: DOMContentLoaded