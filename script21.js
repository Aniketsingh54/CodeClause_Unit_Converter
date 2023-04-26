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

    if(i1=="cubicmeter/kilogram")
    op1=1
    else if(i1=="cubiccentimeter/gram")
    op1=0.001
    else if(i1=="liter/kilogram[L/kg]")
    op1=0.001
    else if(i1=="liter/gram[L/g]")
    op1=1
    else if(i1=="cubicfoot/kilogram[ft^3/kg]")
    op1=0.0283168466
    else if(i1=="cubicfoot/pound[ft^3/lb]")
    op1=0.06242796
    else if(i1=="gallon(US)/pound")
    op1=0.0083454039
    else if(i1=="gallon(UK)/pound")
    op1=0.0100224128


    if(i2=="cubicmeter/kilogram")
    op2=1
    else if(i2=="cubiccentimeter/gram")
    op2=0.001
    else if(i2=="liter/kilogram[L/kg]")
    op2=0.001
    else if(i2=="liter/gram[L/g]")
    op2=1
    else if(i2=="cubicfoot/kilogram[ft^3/kg]")
    op2=0.0283168466
    else if(i2=="cubicfoot/pound[ft^3/lb]")
    op2=0.06242796
    else if(i2=="gallon(US)/pound")
    op2=0.0083454039
    else if(i2=="gallon(UK)/pound")
    op2=0.0100224128
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}