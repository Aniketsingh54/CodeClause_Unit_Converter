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
    
    if(i1=="kelvin")
    op1=1
    else if(i1=="Celsius")
    op1=274.15
    else if(i1=="Fahrenheit")
    op1=255.9277777778
    else if(i1=="Rankine")
    op1=0.5555555556
    else if(i1=="Reaumur")
    op1=274.4
    else if(i1=="Trilepointofwater")
    op1=273.16
    
    if(i2=="kelvin")
op2=1
else if(i2=="Celsius")
op2=274.15
else if(i2=="Fahrenheit")
op2=255.9277777778
else if(i2=="Rankine")
op2=0.5555555556
else if(i2=="Reaumur")
op2=274.4
else if(i2=="Trilepointofwater")
op2=273.16

    
    document.getElementById("in2").value=(d*op1)/op2;
 
}