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
    if(i1=="kilogram/second[kg/s]")
op1=1
else if(i1=="gram/second[g/s]")
op1=0.001
else if(i1=="gram/minute[g/min]")
op1=1.66667E-5 
else if(i1=="gram/hour[g/h]")
op1=2.7777777777778E-7
else if(i1=="gram/day[g/d]")
op1=1.1574074074074E-8
else if(i1=="milligram/minute[mg/min]")
op1= 1.6666666666667E-8
else if(i1=="milligram/hour[mg/h]")
op1=2.7777777777778E-10
else if(i1=="milligram/day[mg/d]")
op1=1.1574074074074E-11
else if(i1=="kilogram/minute[kg/min]")
op1=0.0166666667
else if(i1=="kilogram/hour[kg/h]")
op1=0.0002777778
else if(i1=="kilogram/day[kg/d]")
op1=1.15741E-5
else if(i1=="exagram/second[Eg/s]")
op1= 1.0E+15
else if(i1=="petagram/second[Pg/s]")
op1=1000000000000
else if(i1=="teragram/second[Tg/s]")
op1=1000000000
else if(i1=="gigagram/second[Gg/s]")
op1=1000000
else if(i1=="megagram/second[Mg/s]")
op1=1000
else if(i1=="hectogram/second[hg/s]")
op1=0.1
else if(i1=="dekagram/second[dag/s]")
op1=0.01
else if(i1=="decigram/second[dg/s]")
op1=0.0001
else if(i1=="centigram/second[cg/s]")
op1=1.0E-5
else if(i1=="milligram/second[mg/s]")
op1=1.0E-6
else if(i1=="microgram/second[µg/s]")
op1=1.0E-9



if(i2=="kilogram/second[kg/s]")
op2=1
else if(i2=="gram/second[g/s]")
op2=0.001
else if(i2=="gram/minute[g/min]")
op2=1.66667E-5 
else if(i2=="gram/hour[g/h]")
op2=2.7777777777778E-7
else if(i2=="gram/day[g/d]")
op2=1.1574074074074E-8
else if(i2=="milligram/minute[mg/min]")
op2= 1.6666666666667E-8
else if(i2=="milligram/hour[mg/h]")
op2=2.7777777777778E-10
else if(i2=="milligram/day[mg/d]")
op2=1.1574074074074E-11
else if(i2=="kilogram/minute[kg/min]")
op2=0.0166666667
else if(i2=="kilogram/hour[kg/h]")
op2=0.0002777778
else if(i2=="kilogram/day[kg/d]")
op2=1.15741E-5
else if(i2=="exagram/second[Eg/s]")
op2= 1.0E+15
else if(i2=="petagram/second[Pg/s]")
op2=1000000000000
else if(i2=="teragram/second[Tg/s]")
op2=1000000000
else if(i2=="gigagram/second[Gg/s]")
op2=1000000
else if(i2=="megagram/second[Mg/s]")
op2=1000
else if(i2=="hectogram/second[hg/s]")
op2=0.1
else if(i2=="dekagram/second[dag/s]")
op2=0.01
else if(i2=="decigram/second[dg/s]")
op2=0.0001
else if(i2=="centigram/second[cg/s]")
op2=1.0E-5
else if(i2=="milligram/second[mg/s]")
op2=1.0E-6
else if(i2=="microgram/second[µg/s]")
op2=1.0E-9


    document.getElementById("in2").value=(d*op1)/op2;
 
}