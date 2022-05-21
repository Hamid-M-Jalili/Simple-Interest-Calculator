function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;   
    //Create output text
    document.getElementById("result").innerHTML = "<br/>If you deposit  <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of  <mark>" + rate + "</mark>,<br/><br/>" +
        "You will receive an amount of  <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark><br/>";
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var greaterThanZero = parseInt(principal) > 0;
    if(!greaterThanZero) {
        alert("Please Enter a positive number!")
        document.getElementById("principal").focus();
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
