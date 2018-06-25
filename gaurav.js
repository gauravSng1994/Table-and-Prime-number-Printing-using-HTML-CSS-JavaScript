function table(){
	var n=Number(document.getElementById("table_input").value);
	if(n==""){
		document.getElementById("warning1").innerHTML="This field can't be empty.";
		document.getElementById("warning1").style.color="white";
		document.getElementById("demo").innerHTML="Error! Please try again."
	}
	else if(isNaN(n)){
		document.getElementById("warning1").innerHTML="Please enter a valid number.";	
	}
	else{
		var y;
		for(var i=1;i<=10;i++){
			if(y==undefined){
				y="<div id='tableDiv'>"+n+" * "+i+" = "+n*i+"</div>";		
			}
			else{
				y+="<div id='tableDiv'>"+n+" * "+i+" = "+n*i+"</div>";		
			}
		}
		document.getElementById("warning1").innerHTML="";
		document.getElementById("demo").innerHTML=y;
	}
}

function prime(){
	var l=Number(document.getElementById("prime_lower").value);
	var u=Number(document.getElementById("prime_upper").value);
	var prime;
	var noPrime;
	if(l=="" && u==""){
		var lower=document.getElementById("warning2");
		lower.innerHTML="This field can't be empty."
		lower.style.color="white";
		var upper=document.getElementById("warning3");
		upper.innerHTML="This field can't be empty."
		upper.style.color="white";
		document.getElementById("demo1").innerHTML="Error! Please try again."
	}
	else if((l=="" && u!="") || (l!="" && u=="")){

		if(l==""){
			document.getElementById("warning2").innerHTML="This field can't be empty.";
			document.getElementById("warning3").innerHTML="";
			document.getElementById("demo1").innerHTML="Error! Please try again."
		}
		else if(u==""){
			document.getElementById("warning2").innerHTML="";
			document.getElementById("warning3").innerHTML="This field can't be empty.";
			document.getElementById("demo1").innerHTML="Error! Please try again."
		}
		
	}else if(isNaN(l) && isNaN(u)){
		var lower=document.getElementById("warning2");
		lower.innerHTML="Enter a valid integer."
		lower.style.color="white";
		var upper=document.getElementById("warning3");
		upper.innerHTML="Enter a valid integer."
		upper.style.color="white";
		document.getElementById("demo1").innerHTML="Error! Please try again."
	}
	else if((isNaN(l) && !isNaN(u)) || (!isNaN(l) && isNaN(u))){

		if(isNaN(l)){
			document.getElementById("warning2").innerHTML="Enter a valid integer.";
			document.getElementById("warning3").innerHTML="";
			document.getElementById("demo1").innerHTML="Error! Please try again."
		}
		else if(isNaN(u)){
			document.getElementById("warning2").innerHTML="";
			document.getElementById("warning3").innerHTML="Enter a valid integer.";
			document.getElementById("demo1").innerHTML="Error! Please try again."
		}
		
	}
	else{
		if(u<=l){
			document.getElementById("demo1").innerHTML="Error! Upper limit should be greater than the lower limit.";
			document.getElementById("warning2").innerHTML="";
			document.getElementById("warning3").innerHTML="";
		}
		else{
			var y="";
			for(var i=l;i<=u;i++){
				prime=1;
				for(var j=2;j*j<=i;j++){
					if(i%j==0){
						prime=0;
						break;
					}
				}
				if (prime==1) {
					noPrime=1;
					if(y==undefined){
						y="<div id='primeDiv'>"+i+"</div>";	
					}else{
						y+="<div id='primeDiv'>"+i+"</div>";	
					}
					
				}
			}
			if(noPrime){
				document.getElementById("demo1").innerHTML=y;	
			}else{
				document.getElementById("demo1").innerHTML="No prime number exists in the range";	
			}
			
			
		}
	}
}