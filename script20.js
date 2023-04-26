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
     if(i1=="kilogram/cubicmeter")
op1=1
else if(i1=="gram/cubiccentimeter")
op1=1000
else if(i1=="kilogram/cubiccentimeter")
op1=1000000
else if(i1=="gram/cubicmeter[g/m^3]")
op1=0.001
else if(i1=="gram/cubicmillimeter")
op1=1000000
else if(i1=="milligram/cubicmeter")
op1= 1.0E-6
else if(i1=="milligram/cubiccentimeter")
op1=1
else if(i1=="milligram/cubicmillimeter")
op1=1000
else if(i1=="exagram/liter[Eg/L]")
op1=1.0E+18
else if(i1=="petagram/liter[Pg/L]")
op1=1.0E+15
else if(i1=="teragram/liter[Tg/L]")
op1=1000000000000
else if(i1=="gigagram/liter[Gg/L]")
op1=1000000000
else if(i1=="megagram/liter[Mg/L]")
op1=1000000
else if(i1=="kilogram/liter[kg/L]")
op1=1000
else if(i1=="hectogram/liter[hg/L]")
op1=100
else if(i1=="dekagram/liter[dag/L]")
op1=10
else if(i1=="gram/liter[g/L]")
op1=1
else if(i1=="decigram/liter[dg/L]")
op1=0.1
else if(i1=="centigram/liter[cg/L]")
op1=0.01
else if(i1=="milligram/liter[mg/L]")
op1=0.001
else if(i1=="microgram/liter[µg/L]")
op1= 1.0E-6
else if(i1=="nanogram/liter[ng/L]")
op1= 1.0E-9
else if(i1=="picogram/liter[pg/L]")
op1= 1.0E-12
else if(i1=="femtogram/liter[fg/L]")
op1= 1.0E-15
else if(i1=="attogram/liter[ag/L]")
op1= 1.0E-18



if(i2=="kilogram/cubicmeter")
op2=1
else if(i2=="gram/cubiccentimeter")
op2=1000
else if(i2=="kilogram/cubiccentimeter")
op2=1000000
else if(i2=="gram/cubicmeter[g/m^3]")
op2=0.001
else if(i2=="gram/cubicmillimeter")
op2=1000000
else if(i2=="milligram/cubicmeter")
op2= 1.0E-6
else if(i2=="milligram/cubiccentimeter")
op2=1
else if(i2=="milligram/cubicmillimeter")
op2=1000
else if(i2=="exagram/liter[Eg/L]")
op2=1.0E+18
else if(i2=="petagram/liter[Pg/L]")
op2=1.0E+15
else if(i2=="teragram/liter[Tg/L]")
op2=1000000000000
else if(i2=="gigagram/liter[Gg/L]")
op2=1000000000
else if(i2=="megagram/liter[Mg/L]")
op2=1000000
else if(i2=="kilogram/liter[kg/L]")
op2=1000
else if(i2=="hectogram/liter[hg/L]")
op2=100
else if(i2=="dekagram/liter[dag/L]")
op2=10
else if(i2=="gram/liter[g/L]")
op2=1
else if(i2=="decigram/liter[dg/L]")
op2=0.1
else if(i2=="centigram/liter[cg/L]")
op2=0.01
else if(i2=="milligram/liter[mg/L]")
op2=0.001
else if(i2=="microgram/liter[µg/L]")
op2= 1.0E-6
else if(i2=="nanogram/liter[ng/L]")
op2= 1.0E-9
else if(i2=="picogram/liter[pg/L]")
op2= 1.0E-12
else if(i2=="femtogram/liter[fg/L]")
op2= 1.0E-15
else if(i2=="attogram/liter[ag/L]")
op2= 1.0E-18

    document.getElementById("in2").value=(d*op1)/op2;
 
}