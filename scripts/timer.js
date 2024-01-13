function currentTime(){
	let date = new Date();
	let hours = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	sec = plusZero(sec);
	min = plusZero(min);
	hours = plusZero(hours);
	 document.getElementById('time').innerHTML = hours+':'+ min +':' +sec;
	setTimeout(currentTime, 1000);
}
currentTime();


function plusZero(number){
	if (number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}

