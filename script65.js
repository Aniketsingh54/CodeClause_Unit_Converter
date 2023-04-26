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

    if(i1=="volt[V]")
    op1=1
    else if(i1=="watt/ampere[W/A]")
    op1=1
    else if(i1=="abvolt[abV]")
    op1=1.0E-8
    else if(i1=="EMUofelectricpotential")
    op1=1.0E-8 
    else if(i1=="statvolt[stV]")
    op1=299.7925
    else if(i1=="ESUofelectricpotential")
    op1=299.7925
    
    if(i2=="volt[V]")
    op2=1
    else if(i2=="watt/ampere[W/A]")
    op2=1
    else if(i2=="abvolt[abV]")
    op2=1.0E-8
    else if(i2=="EMUofelectricpotential")
    op2=1.0E-8 
    else if(i2=="statvolt[stV]")
    op2=299.7925
    else if(i2=="ESUofelectricpotential")
    op2=299.7925
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}