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

    if(i1=="kelvin/watt[K/W]")
op1=1
else if(i1=="degreeFahrenheithour/Btu(IT)")
op1=1.8956342406
else if(i1=="degreeFahrenheithour/Btu(th)")
op1=1.8969028295
else if(i1=="degreeFahrenheitsecond/Btu(IT)")
op1=0.0005265651
else if(i1=="degreeFahrenheitsecond/Btu(th)")
op1=0.0005269175

if(i2=="kelvin/watt[K/W]")
op2=1
else if(i2=="degreeFahrenheithour/Btu(IT)")
op2=1.8956342406
else if(i2=="degreeFahrenheithour/Btu(th)")
op2=1.8969028295
else if(i2=="degreeFahrenheitsecond/Btu(IT)")
op2=0.0005265651
else if(i2=="degreeFahrenheitsecond/Btu(th)")
op2=0.0005269175

    document.getElementById("in2").value=(d*op1)/op2;
 
}