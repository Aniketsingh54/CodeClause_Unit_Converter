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

    if(i1=="meter/squaresecond")
op1=1
else if(i1=="decimeter/squaresecond")
op1=0.1
else if(i1=="kilometer/squaresecond")
op1=1000
else if(i1=="hectometer/squaresecond")
op1=100
else if(i1=="dekameter/squaresecond")
op1=10
else if(i1=="centimeter/squaresecond")
op1=0.01
else if(i1=="millimeter/squaresecond")
op1=0.001
else if(i1=="micrometer/squaresecond")
op1=1.0E-6
else if(i1=="nanometer/squaresecond")
op1=1.0E-9
else if(i1=="picometer/squaresecond")
op1=1.0E-12
else if(i1=="femtometer/squaresecond")
op1=1.0E-15
else if(i1=="attometer/squaresecond")
op1=1.0E-18
else if(i1=="gal[Gal]")
op1=0.01
else if(i1=="galileo[Gal]")
op1=0.01
else if(i1=="mile/squaresecond[mi/s^2]")
op1=1609.344
else if(i1=="yard/squaresecond")
op1=0.9144
else if(i1=="foot/squaresecond[ft/s^2]")
op1=0.3048
else if(i1=="inch/squaresecond[in/s^2]")
op1=0.0254
else if(i1=="Accelerationofgravity[g]")
op1=9.80665



if(i2=="meter/squaresecond")
op2=1
else if(i2=="decimeter/squaresecond")
op2=0.1
else if(i2=="kilometer/squaresecond")
op2=1000
else if(i2=="hectometer/squaresecond")
op2=100
else if(i2=="dekameter/squaresecond")
op2=10
else if(i2=="centimeter/squaresecond")
op2=0.01
else if(i2=="millimeter/squaresecond")
op2=0.001
else if(i2=="micrometer/squaresecond")
op2=1.0E-6
else if(i2=="nanometer/squaresecond")
op2=1.0E-9
else if(i2=="picometer/squaresecond")
op2=1.0E-12
else if(i2=="femtometer/squaresecond")
op2=1.0E-15
else if(i2=="attometer/squaresecond")
op2=1.0E-18
else if(i2=="gal[Gal]")
op2=0.01
else if(i2=="galileo[Gal]")
op2=0.01
else if(i2=="mile/squaresecond[mi/s^2]")
op2=1609.344
else if(i2=="yard/squaresecond")
op2=0.9144
else if(i2=="foot/squaresecond[ft/s^2]")
op2=0.3048
else if(i2=="inch/squaresecond[in/s^2]")
op2=0.0254
else if(i2=="Accelerationofgravity[g]")
op2=9.80665


    document.getElementById("in2").value=(d*op1)/op2;
 
}