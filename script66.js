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

    if(i1=="ohm")
    op1=1
    else if(i1=="megohm")
    op1=1000000
    else if(i1=="microhm")
    op1=1.0E-6
    else if(i1=="volt/ampere[V/A]")
    op1=1
    else if(i1=="reciprocalsiemens[1/S]")
    op1=1
    else if(i1=="abohm")
    op1=1.0E-9
    else if(i1=="EMUofresistance")
    op1=1.0E-9
    else if(i1=="statohm")
    op1=898755200000
    else if(i1=="ESUofresistance")
    op1=898755200000
    else if(i1=="QuantizedHallresistance")
    op1=25812.8056
    
    if(i2=="ohm")
    op2=1
    else if(i2=="megohm")
    op2=1000000
    else if(i2=="microhm")
    op2=1.0E-6
    else if(i2=="volt/ampere[V/A]")
    op2=1
    else if(i2=="reciprocalsiemens[1/S]")
    op2=1
    else if(i2=="abohm")
    op2=1.0E-9
    else if(i2=="EMUofresistance")
    op2=1.0E-9
    else if(i2=="statohm")
    op2=898755200000
    else if(i2=="ESUofresistance")
    op2=898755200000
    else if(i2=="QuantizedHallresistance")
    op2=25812.8056
   
    document.getElementById("in2").value=(d*op1)/op2;
 
}