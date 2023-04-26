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
    if(i1=="meter")
    op1=1;
    else if(i1=="kilometer")
    op1=1000;
    else if(i1=="decimeter")
    op1=0.1;
    else if(i1=="centimeter")
    op1=0.01;
    else if(i1=="millimeter")
    op1=1.0E-6;
    else if(i1=="micrometer")
    op1=1.0E-6;
    else if(i1=="nanometer")
    op1=1.0E-9;
    else if(i1=="mile")
    op1=1609.344;
    else if(i1=="yard")
    op1=0.9144;
    else if(i1=="foot")
    op1=0.3048;
    else if(i1=="inch")
    op1=0.0254;
    else if(i1=="light year")
    op1=9.46073047258E+15;
    else if(i1=="exameter")
    op1=1.0E+18;
    else if(i1=="petameter")
    op1=1.0E+15;
    else if(i1=="terameter")
    op1=1000000000000;
    else if(i1=="gigameter")
    op1=1000000000;
    else if(i1=="megameter")
    op1=1000000;
    else if(i1=="hectometer")
    op1=100;
    else if(i1=="dekameter")
    op1=10;
    else if(i1=="micron")
    op1=1.0E-6;
    else if(i1=="picometer")
    op1=1.0E-12;
    else if(i1=="femtometer")
    op1=1.0E-15;
    else if(i1=="attometer")
    op1=1.0E-18;
    else if(i1=="megaparsec")
    op1=3.08567758128E+22;
    else if(i1=="kiloparsec")
    op1=3.08567758128E+19;
    else if(i1=="parsec")
    op1=3.08567758128E+16;
    else if(i1=="astronomical unit")
    op1=149597870691;



    if(i2=="meter")
    op2=1;
    else if(i2=="kilometer")
    op2=1000;
    else if(i2=="decimeter")
    op2=0.1;
    else if(i2=="centimeter")
    op2=0.01;
    else if(i2=="millimeter")
    op2=1.0E-6;
    else if(i2=="micrometer")
    op2=1.0E-6;
    else if(i2=="nanometer")
    op2=1.0E-9;
    else if(i2=="mile")
    op2=1609.344;
    else if(i2=="yard")
    op2=0.9144;
    else if(i2=="foot")
    op2=0.3048;
    else if(i2=="inch")
    op2=0.0254;
    else if(i2=="light year")
    op2=9.46073047258E+15;
    else if(i2=="exameter")
    op2=1.0E+18;
    else if(i2=="petameter")
    op2=1.0E+15;
    else if(i2=="terameter")
    op2=1000000000000;
    else if(i2=="gigameter")
    op2=1000000000;
    else if(i2=="megameter")
    op2=1000000;
    else if(i2=="hectometer")
    op2=100;
    else if(i2=="dekameter")
    op2=10;
    else if(i2=="micron")
    op2=1.0E-6;
    else if(i2=="picometer")
    op2=1.0E-12;
    else if(i2=="femtometer")
    op2=1.0E-15;
    else if(i2=="attometer")
    op2=1.0E-18;
    else if(i2=="megaparsec")
    op2=3.08567758128E+22;
    else if(i2=="kiloparsec")
    op2=3.08567758128E+19;
    else if(i2=="parsec")
    op2=3.08567758128E+16;
    else if(i2=="astronomical unit")
    op2=149597870691;
    
    console.log(op1);
    console.log(op2);
    document.getElementById("in2").value=(d*op1)/op2;
 
}