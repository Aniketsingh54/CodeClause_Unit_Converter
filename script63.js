document.querySelector(".submit").onclick=function()
{
    let x = document.getElementById("mySelect1");
    let y = document.getElementById("mySelect2");
    let i = x.selectedIndex;
    let j = y.selectedIndex;
    let i1=x.options[i].text;
    let i2=y.options[j].text;
    let op1,op2;
    let d=document.getElementById("in1").value;

    if(i1=="ampere/squaremeter[A/m^2]")
    op1=1
    else if(i1=="ampere/squarecentimeter")
    op1=10000
    else if(i1=="ampere/squareinch[A/in^2]")
    op1=1550.0031000062
    else if(i1=="ampere/squaremil[A/mi^2]")
    op1=1550003100.0062
    else if(i1=="ampere/cicularmil")
    op1=1973525240.9908
    else if(i1=="abampere/squarecentimeter")
    op1=100000
    
    if(i2=="ampere/squaremeter[A/m^2]")
    op2=1
    else if(i2=="ampere/squarecentimeter")
    op2=10000
    else if(i2=="ampere/squareinch[A/in^2]")
    op2=1550.0031000062
    else if(i2=="ampere/squaremil[A/mi^2]")
    op2=1550003100.0062
    else if(i2=="ampere/cicularmil")
    op2=1973525240.9908
    else if(i2=="abampere/squarecentimeter")
    op2=100000
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}