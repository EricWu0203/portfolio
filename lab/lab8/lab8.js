var counter = 0;

function start()	
{ 
	counter++;
	if (counter%2==0) {

		document.getElementById('pic').src = "b.png"
	}
	else {
	 	document.getElementById('pic').src = "a.png"
	 };
	
}
setInterval(start, 300);
window.addEventListener("load", start, false);
