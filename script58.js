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

if(i1=="coulomb/squaremeter")
op1=1
else if(i1=="coulomb/squarecentimeter")
op1=10000
else if(i1=="coulomb/squareinch[C/in^2]")
op1=1550.0031000062
else if(i1=="abcoulomb/squaremeter")
op1=10
else if(i1=="abcoulomb/squarecentimeter")
op1=100000
else if(i1=="abcoulomb/squareinch")
op1=15500.031000062



if(i2=="coulomb/squaremeter")
op2=1
else if(i2=="coulomb/squarecentimeter")
op2=10000
else if(i2=="coulomb/squareinch[C/in^2]")
op2=1550.0031000062
else if(i2=="abcoulomb/squaremeter")
op2=10
else if(i2=="abcoulomb/squarecentimeter")
op2=100000
else if(i2=="abcoulomb/squareinch")
op2=15500.031000062


    document.getElementById("in2").value=(d*op1)/op2;
 
}