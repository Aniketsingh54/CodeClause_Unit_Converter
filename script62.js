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

    if(i1=="ampere/meter[A/m]")
    op1=1
    else if(i1=="ampere/centimeter[A/cm]")
    op1=100
    else if(i1=="ampere/inch[A/in]")
    op1=39.3700787402
    else if(i1=="abampere/meter[abA/m]")
    op1=10
    else if(i1=="abampere/centimeter")
    op1=1000
    else if(i1=="abampere/inch[abA/in]")
    op1=393.7007874016
    else if(i1=="oersted[Oe]")
    op1=79.5774715102
    else if(i1=="gilbert/centimeter[Gi/cm]")
    op1=79.5774715102
    
    
    if(i2=="ampere/meter[A/m]")
    op2=1
    else if(i2=="ampere/centimeter[A/cm]")
    op2=100
    else if(i2=="ampere/inch[A/in]")
    op2=39.3700787402
    else if(i2=="abampere/meter[abA/m]")
    op2=10
    else if(i2=="abampere/centimeter")
    op2=1000
    else if(i2=="abampere/inch[abA/in]")
    op2=393.7007874016
    else if(i2=="oersted[Oe]")
    op2=79.5774715102
    else if(i2=="gilbert/centimeter[Gi/cm]")
    op2=79.5774715102
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}