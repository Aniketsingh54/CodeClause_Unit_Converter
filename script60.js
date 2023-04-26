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

     if(i1=="coulomb/cubicmeter[C/m^3]")
op1=1
else if(i1=="coulomb/cubiccentimeter")
op1=1000000
else if(i1=="coulomb/cubicinch[C/in^3]")
op1=61023.744094732
else if(i1=="abcoulomb/cubicmeter")
op1=10
else if(i1=="abcoulomb/cubiccentimeter")
op1=10000000
else if(i1=="abcoulomb/cubicinch")
op1=610237.44094732

if(i2=="coulomb/cubicmeter[C/m^3]")
op2=1
else if(i2=="coulomb/cubiccentimeter")
op2=1000000
else if(i2=="coulomb/cubicinch[C/in^3]")
op2=61023.744094732
else if(i2=="abcoulomb/cubicmeter")
op2=10
else if(i2=="abcoulomb/cubiccentimeter")
op2=10000000
else if(i2=="abcoulomb/cubicinch")
op2=610237.44094732

    document.getElementById("in2").value=(d*op1)/op2;
 
}