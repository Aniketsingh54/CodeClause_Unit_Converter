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

    if(i1=="coulomb/meter[C/m]")
    op1=1
    else if(i1=="coulomb/centimeter[C/cm]")
    op1=100
    else if(i1=="coulomb/inch[C/in]")
    op1=39.3700787402
    else if(i1=="abcoulomb/meter[abC/m]")
    op1=10
    else if(i1=="abcoulomb/centimeter")
    op1=1000
    else if(i1=="abcoulomb/inch[abC/in]")
    op1=393.7007874016
    
    
    if(i2=="coulomb/meter[C/m]")
    op2=1
    else if(i2=="coulomb/centimeter[C/cm]")
    op2=100
    else if(i2=="coulomb/inch[C/in]")
    op2=39.3700787402
    else if(i2=="abcoulomb/meter[abC/m]")
    op2=10
    else if(i2=="abcoulomb/centimeter")
    op2=1000
    else if(i2=="abcoulomb/inch[abC/in]")
    op2=393.7007874016
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}