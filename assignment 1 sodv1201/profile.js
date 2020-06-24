
//Function To display the Name under image after every 10 secnds.

document.getElementById("holderBox").style.display = "none";


setTimeout(function()
{
    document.getElementById("HolderBox").style.display = "block";

},10000);


                                                                     
//Function for mentioning date in the Footer.                        
                                                                     
                                                                    
var x = new Date();                                                
document.getElementById("dateDisplay").innerHTML = x.toLocaleDateString();   
                                                                    









