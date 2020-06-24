
let val = document.getElementById("fVal"); 


// Function to Convert Farenheit Temperature to Celcius

function degreeCelcius(){
          
    let x = document.getElementById('fVal').value;

    let c = (x - 32) * 5/9;            
    
    document.getElementById('showC').value = c;
}


// Function to Convert Farenheit Temperature to Faranheit.

  function degreeKelvin(){
    let x = document.getElementById('fVal').value;  
    
    let c= (x - 32) * 5/9;
    
    let k = c + 273.15;
    
    document.getElementById('showK').value = k;
}


function eraseTemp() {
    
    

    document.getElementById("showC").value = " " ;

    document.getElementById("showK").value = " " ;

    val.value = null;
    
}

//Function for mentioning date in the Footer.                        
                                                                     
                                                                    
var x = new Date();                                                
document.getElementById("dateDisplay").innerHTML = x.toLocaleDateString();   

