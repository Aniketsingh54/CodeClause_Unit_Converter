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

    if(i1=="siemens[S]")
    op1=1
    else if(i1=="megasiemens[MS]")
    op1=1000000
    else if(i1=="kilosiemens[kS]")
    op1=1000
    else if(i1=="millisiemens[mS]")
    op1=0.001
    else if(i1=="microsiemens[µS]")
    op1=1.0E-6 
    else if(i1=="ampere/volt[A/V]")
    op1=1
    else if(i1=="mho")
    op1=1
    else if(i1=="gemmho")
    op1=1.0E-6 
    else if(i1=="micromho")
    op1=1.0E-6
    else if(i1=="abmho")
    op1=1000000000
    else if(i1=="statmho")
    op1=1.1123470522803E-12 
    else if(i1=="QuantizedHallconductance")
    op1=3.87405E-5
    
    
    if(i2=="siemens[S]")
    op2=1
    else if(i2=="megasiemens[MS]")
    op2=1000000
    else if(i2=="kilosiemens[kS]")
    op2=1000
    else if(i2=="millisiemens[mS]")
    op2=0.001
    else if(i2=="microsiemens[µS]")
    op2=1.0E-6 
    else if(i2=="ampere/volt[A/V]")
    op2=1
    else if(i2=="mho")
    op2=1
    else if(i2=="gemmho")
    op2=1.0E-6 
    else if(i2=="micromho")
    op2=1.0E-6
    else if(i2=="abmho")
    op2=1000000000
    else if(i2=="statmho")
    op2=1.1123470522803E-12 
    else if(i2=="QuantizedHallconductance")
    op2=3.87405E-5
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}