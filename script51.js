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
    if(i1=="weber[Wb]")
    op1=1
    else if(i1=="milliweber[mWb]")
    op1=0.001
    else if(i1=="microweber[µWb]")
    op1=1.0E-6 
    else if(i1=="voltsecond[V*s]")
    op1=1
    else if(i1=="unitpole")
    op1=1.256637061436E-7 
    else if(i1=="megaline")
    op1=0.01
    else if(i1=="kiloline")
    op1=1.0E-5
    else if(i1=="line")
    op1=1.0E-8
    else if(i1=="maxwell[Mx]")
    op1=1.0E-8
    else if(i1=="teslasquaremeter[T*m^2]")
    op1=1
    else if(i1=="teslasquarecentimeter")
    op1=0.0001
    else if(i1=="gausssquarecentimeter")
    op1=1.0E-8 
    else if(i1=="Magneticfluxquantum")
    op1=2.06783461E-15
    
    if(i2=="weber[Wb]")
    op2=1
    else if(i2=="milliweber[mWb]")
    op2=0.001
    else if(i2=="microweber[µWb]")
    op2=1.0E-6 
    else if(i2=="voltsecond[V*s]")
    op2=1
    else if(i2=="unitpole")
    op2=1.256637061436E-7 
    else if(i2=="megaline")
    op2=0.01
    else if(i2=="kiloline")
    op2=1.0E-5
    else if(i2=="line")
    op2=1.0E-8
    else if(i2=="maxwell[Mx]")
    op2=1.0E-8
    else if(i2=="teslasquaremeter[T*m^2]")
    op2=1
    else if(i2=="teslasquarecentimeter")
    op2=0.0001
    else if(i2=="gausssquarecentimeter")
    op2=1.0E-8 
    else if(i2=="Magneticfluxquantum")
    op2=2.06783461E-15
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}