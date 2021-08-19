// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(navn){
		return `Hej med dig, ${navn}`;
	};
	
	let hilsenTilTroels = hils('Troels');
	let hilsenTilMagnus = hils('Magnus');

	console.log(hilsenTilTroels);
	console.log(hilsenTilMagnus);

}); // Afslutter: DOMContentLoaded

