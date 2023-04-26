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

    if(i1=="kelvin[K]")
    op1=1
    else if(i1=="degreeCelsius[°C]")
    op1=1
    else if(i1=="degreecentigrade[°C]")
    op1=1
    else if(i1=="degreeFahrenheit[°F]")
    op1=0.5555555556
    else if(i1=="degreeRankine0[°R]")
    op1=0.5555555556
    else if(i1=="degreeReaumur[°r]")
    op1=1.25
    
    
    if(i2=="kelvin[K]")
    op2=1
    else if(i2=="degreeCelsius[°C]")
    op2=1
    else if(i2=="degreecentigrade[°C]")
    op2=1
    else if(i2=="degreeFahrenheit[°F]")
    op2=0.5555555556
    else if(i2=="degreeRankine0[°R]")
    op2=0.5555555556
    else if(i2=="degreeReaumur[°r]")
    op2=1.25
    document.getElementById("in2").value=(d*op1)/op2;
 
}