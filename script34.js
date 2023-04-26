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

    if(i1=="kilogram/pascal/second/square")
op1=1
else if(i1=="permeability(0°C)")
op1=5.72135E-11
else if(i1=="permeability(23°C)")
op1=5.74525E-11
else if(i1=="permeabilityinches(0°C)")
op1= 1.45322E-12
else if(i1=="permeabilityinches(23°C)")
op1=1.45929E-12


if(i2=="kilogram/pascal/second/square")
op2=1
else if(i2=="permeability(0°C)")
op2=5.72135E-11
else if(i2=="permeability(23°C)")
op2=5.74525E-11
else if(i2=="permeabilityinches(0°C)")
op2= 1.45322E-12
else if(i2=="permeabilityinches(23°C)")
op2=1.45929E-12


    document.getElementById("in2").value=(d*op1)/op2;
 
}