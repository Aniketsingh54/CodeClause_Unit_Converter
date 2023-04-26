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

    if(i1=="mol/cubicmeter[mol/m^3]")
    op1=1
    else if(i1=="mol/liter[mol/L]")
    op1=1000
    else if(i1=="mol/cubiccentimeter")
    op1=1000000
    else if(i1=="mol/cubicmillimeter")
    op1=1000000000
    else if(i1=="kilomol/cubicmeter")
    op1=1000
    else if(i1=="kilomol/liter[kmol/L]")
    op1=1000000
    else if(i1=="kilomol/cubiccentimeter")
    op1=1000000000
    else if(i1=="kilomol/cubicmillimeter")
    op1=1000000000000
    else if(i1=="millimol/cubicmeter")
    op1=0.001
    else if(i1=="millimol/liter[mmol/L]")
    op1=1
    else if(i1=="millimol/cubiccentimeter")
    op1=1000
    else if(i1=="millimol/cubicmillimeter")
    op1=1000000
    
    
    if(i2=="mol/cubicmeter[mol/m^3]")
    op2=1
    else if(i2=="mol/liter[mol/L]")
    op2=1000
    else if(i2=="mol/cubiccentimeter")
    op2=1000000
    else if(i2=="mol/cubicmillimeter")
    op2=1000000000
    else if(i2=="kilomol/cubicmeter")
    op2=1000
    else if(i2=="kilomol/liter[kmol/L]")
    op2=1000000
    else if(i2=="kilomol/cubiccentimeter")
    op2=1000000000
    else if(i2=="kilomol/cubicmillimeter")
    op2=1000000000000
    else if(i2=="millimol/cubicmeter")
    op2=0.001
    else if(i2=="millimol/liter[mmol/L]")
    op2=1
    else if(i2=="millimol/cubiccentimeter")
    op2=1000
    else if(i2=="millimol/cubicmillimeter")
    op2=1000000
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}