  
setInterval(function(){
    var date = new Date();	
    var hours = date.getHours();
    var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	  


 var gosterilenSaat =document.getElementById('Clock').innerHTML =hours +":"+minutes+":"+seconds+" "+ampm
	

	
	
    }, 1000); 
