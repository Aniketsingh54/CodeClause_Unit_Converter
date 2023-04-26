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

    if(i1=="siemens/meter[S/m]")
    op1=1
    else if(i1=="picosiemens/meter[pS/m]")
    op1=1.0E-12
    else if(i1=="mho/meter[mho/m]")
    op1=1
    else if(i1=="mho/centimeter[mho/cm]")
    op1=100
    else if(i1=="abmho/meter[abmho/m]")
    op1=1000000000
    else if(i1=="abmho/centimeter")
    op1=100000000000
    else if(i1=="statmho/meter[stmho/m]")
    op1=1.1126534560019E-12
    else if(i1=="statmho/centimeter")
    op1=1.1126534560019E-10 
    
    
    if(i2=="siemens/meter[S/m]")
    op2=1
    else if(i2=="picosiemens/meter[pS/m]")
    op2=1.0E-12
    else if(i2=="mho/meter[mho/m]")
    op2=1
    else if(i2=="mho/centimeter[mho/cm]")
    op2=100
    else if(i2=="abmho/meter[abmho/m]")
    op2=1000000000
    else if(i2=="abmho/centimeter")
    op2=100000000000
    else if(i2=="statmho/meter[stmho/m]")
    op2=1.1126534560019E-12
    else if(i2=="statmho/centimeter")
    op2=1.1126534560019E-10 
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}