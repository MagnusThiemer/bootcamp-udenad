// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let textCount = document.querySelector('#text-count');
	let number = 5;
	let maxCount = 10;
	let minCount = 0;

	function setCount(){
		textCount.innerHTML = number;
	}
	setCount();

	function changeValue(direction){
		if (direction === 'dec' && number > minCount){
			number--;
		} else if (direction === 'inc' && number < maxCount){
			number++;
		}
		setCount();
	}

	document.querySelector('#btn-count-decrease').addEventListener('click', () => changeValue('dec'));
	document.querySelector('#btn-count-increase').addEventListener('click', () => changeValue('inc'));
}); 
// Afslutter: DOMContentLoaded