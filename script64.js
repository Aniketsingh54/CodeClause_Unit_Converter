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

    if(i1=="volt/meter[V/m]")
    op1=1
    else if(i1=="kilovolt/meter[kV/m]")
    op1=1000
    else if(i1=="kilovolt/centimeter[kV/cm]")
    op1=100000
    else if(i1=="volt/centimeter[V/cm]")
    op1=100
    else if(i1=="millivolt/meter[mV/m]")
    op1=0.001
    else if(i1=="microvolt/meter[µ/m]")
    op1=1.0E-6
    else if(i1=="kilovolt/inch[kV/in]")
    op1=39370.078740157
    else if(i1=="volt/inch[V/in]")
    op1=39.3700787402
    else if(i1=="volt/mil[V/mil]")
    op1=39370.078740157
    else if(i1=="abvolt/centimeter[abV/cm]")
    op1=1.0E-6 
    else if(i1=="statvolt/centimeter[stV/cm]")
    op1=29979.19999934
    else if(i1=="statvolt/inch[stV/in]")
    op1=11802.834645298
    else if(i1=="newton/coulomb[N/C]")
    op1=1
    
    
    if(i2=="volt/meter[V/m]")
    op2=1
    else if(i2=="kilovolt/meter[kV/m]")
    op2=1000
    else if(i2=="kilovolt/centimeter[kV/cm]")
    op2=100000
    else if(i2=="volt/centimeter[V/cm]")
    op2=100
    else if(i2=="millivolt/meter[mV/m]")
    op2=0.001
    else if(i2=="microvolt/meter[µ/m]")
    op2=1.0E-6
    else if(i2=="kilovolt/inch[kV/in]")
    op2=39370.078740157
    else if(i2=="volt/inch[V/in]")
    op2=39.3700787402
    else if(i2=="volt/mil[V/mil]")
    op2=39370.078740157
    else if(i2=="abvolt/centimeter[abV/cm]")
    op2=1.0E-6 
    else if(i2=="statvolt/centimeter[stV/cm]")
    op2=29979.19999934
    else if(i2=="statvolt/inch[stV/in]")
    op2=11802.834645298
    else if(i2=="newton/coulomb[N/C]")
    op2=1
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}