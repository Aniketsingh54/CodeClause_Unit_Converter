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
    if(i1=="newton/meter[N/m]")
    op1=1
    else if(i1=="millinewnon/meter[mN/m]")
    op1=0.001
    else if(i1=="gram-force/centimeter")
    op1=0.980665
    else if (i1=="dyne/centimeter[dyn/cm]")
    op1=0.001
    else if(i1=="erg/squarecentimeter")
    op1=0.001
    else if(i1=="erg/squaremillimeter")
    op1=0.1
    else if(i1=="poundal/inch[pdl/in]")
    op1=5.443108491
    else if(i1=="pound-force/inch[lbf/in]")
    op1=175.1268369864
    
    if(i2=="newton/meter[N/m]")
    op2=1
    else if(i2=="millinewnon/meter[mN/m]")
    op2=0.001
    else if(i2=="gram-force/centimeter")
    op2=0.980665
    else if (i2=="dyne/centimeter[dyn/cm]")
    op2=0.001
    else if(i2=="erg/squarecentimeter")
    op2=0.001
    else if(i2=="erg/squaremillimeter")
    op2=0.1
    else if(i2=="poundal/inch[pdl/in]")
    op2=5.443108491
    else if(i2=="pound-force/inch[lbf/in]")
    op2=175.1268369864
    

    document.getElementById("in2").value=(d*op1)/op2;
 
}