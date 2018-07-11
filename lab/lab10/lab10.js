var i =1;
var j=1;
while(i<=9){ 
	var d ="d" +i;
	var answer = document.getElementById(d);
	while(j<=9){
		answer.innerHTML += i+ " X " + j +" = " + i*j +"<br/>";
		j++;
	};
	
	j=1; 
	i++;
}


 
 

