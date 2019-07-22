console.log("script running!"); 
//This is the function and definition for adding num
function addnum(){
        var x = parseFloat(document.getElementById('numberin1').value);
        var y = parseFloat(document.getElementById('numberin2').value);
        window.alert("The answer for " + x + "+" + y +" is: " + (x+y));
}
