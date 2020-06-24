

function convertingMarks(){


    let num = document.getElementById('markVal').value;

    let val = document.getElementById('showVal');  




if (num >= 90 && num <= 100){

val.textContent = "You passed with Grade A.";

}

else if (num >= 80 && num < 90){

val.textContent = "You passed with Grade B.";

}


else if (num >= 70 && num < 80) {


val.textContent = "You passed with Grade C.";

}


else if (num >= 50 && num < 70){


val.textContent = "You passed with Grade D.";

}



else if (num < 50 && num > 0) {

val.textContent = "You failed with Grade F.";

}


else if (num < 0 || num > 100 ){

window.alert("Please enter the value between 0 - 100 ");

}

else {

    window.alert("Invalid Input")
}

}


function clearVal() {

    document.getElementById("showVal").innerHTML = " ";

    document.getElementById("markVal").value= " ";
    
    
}


//Function for mentioning date in the Footer.                        
                                                                     
                                                                    
var x = new Date();                                                
document.getElementById("dateDisplay").innerHTML = x.toLocaleDateString(); 