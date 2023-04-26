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

    if(i1=="ampere[A]")
    op1=1
    else if(i1=="kiloampere[kA]")
    op1=1000
    else if(i1=="milliampere[mA]")
    op1=0.001
    else if(i1=="biot[Bi]")
    op1=10
    else if(i1=="abampere[abA]")
    op1=10
    else if(i1=="EMUofcurrent")
    op1=10
    else if(i1=="statampere[stA]")
    op1=3.335641E-10
    else if(i1=="ESUofcurrent")
    op1=3.335641E-10
    else if(i1=="CGSe.m.unit")
    op1=10
    else if(i1=="CGSe.s.unit")
    op1=3.335641E-10
    
    
    if(i2=="ampere[A]")
    op2=1
    else if(i2=="kiloampere[kA]")
    op2=1000
    else if(i2=="milliampere[mA]")
    op2=0.001
    else if(i2=="biot[Bi]")
    op2=10
    else if(i2=="abampere[abA]")
    op2=10
    else if(i2=="EMUofcurrent")
    op2=10
    else if(i2=="statampere[stA]")
    op2=3.335641E-10
    else if(i2=="ESUofcurrent")
    op2=3.335641E-10
    else if(i2=="CGSe.m.unit")
    op2=10
    else if(i2=="CGSe.s.unit")
    op2=3.335641E-10
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}