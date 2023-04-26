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
    else if(i1=="ampereturn/meter[At/m]")
    op1=1
    else if(i1=="kiloampere/meter[kA/m]")
    op1=1000
    else if(i1=="oersted[Oe]")
    op1=79.5774715459
    
    if(i2=="ampere/meter[A/m]")
    op2=1
    else if(i2=="ampereturn/meter[At/m]")
    op2=1
    else if(i2=="kiloampere/meter[kA/m]")
    op2=1000
    else if(i2=="oersted[Oe]")
    op2=79.5774715459

    document.getElementById("in2").value=(d*op1)/op2;
 
}