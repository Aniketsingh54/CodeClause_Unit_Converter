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

    if(i1=="coulomb/kilogram[C/kg]")
op1=1
else if(i1=="millicoulomb/kilogram[mC/kg]")
op1=0.001
else if(i1=="microcoulomb/kilogram[µC/kg]")
op1=1.0E-6
else if(i1=="roentgen[R]")
op1=0.000258
else if(i1=="tissueroentgen")
op1=0.000258
else if(i1=="parker")
op1=0.000258
else if(i1=="rep")
op1=0.000258


if(i2=="coulomb/kilogram[C/kg]")
op2=1
else if(i2=="millicoulomb/kilogram[mC/kg]")
op2=0.001
else if(i2=="microcoulomb/kilogram[µC/kg]")
op2=1.0E-6
else if(i2=="roentgen[R]")
op2=0.000258
else if(i2=="tissueroentgen")
op2=0.000258
else if(i2=="parker")
op2=0.000258
else if(i2=="rep")
op2=0.000258

    document.getElementById("in2").value=(d*op1)/op2;
 
}