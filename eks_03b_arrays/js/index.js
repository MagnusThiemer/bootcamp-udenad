// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

 	const navne = ['Anders', 'Fedtmule', 'Mickey', 'Andersine'];
 	const navneListElement = document.querySelector('#liste');

	function makeList(array){
		 array.forEach(navn => navneListElement.innerHTML += `<li>${navn}</li>`);
	 }

	makeList(navne);

}); // Afslutter: DOMContentLoaded