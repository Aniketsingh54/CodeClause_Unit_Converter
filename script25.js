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

     if(i1=="cubicmeter/second[m^3/s]")
op1=1
else if(i1=="cubicmeter/day[m^3/d]")
op1=1.15741E-5
else if(i1=="cubicmeter/hour[m^3/h]")
op1=0.0002777778
else if(i1=="cubicmeter/minute")
op1=0.0166666667
else if(i1=="cubiccentimeter/day")
op1=1.1574074074074E-11
else if(i1=="cubiccentimeter/hour")
op1=2.7777777777778E-10
else if(i1=="cubiccentimeter/minute")
op1=1.6666666666667E-8
else if(i1=="cubiccentimeter/second")
op1=1.0E-6
else if(i1=="liter/day[L/d]")
op1=1.1574074074074E-8
else if(i1=="liter/hour[L/h]")
op1=2.7777777777778E-7
else if(i1=="liter/minute[L/min]")
op1=1.66667E-5
else if(i1=="liter/second[L/s]")
op1=0.001
else if(i1=="milliliter/day[mL/d]")
op1=1.1574074074074E-11
else if(i1=="milliliter/hour[mL/h]")
op1=2.7777777777778E-10
else if(i1=="milliliter/minute[mL/min]")
op1= 1.6666666666667E-8
else if(i1=="milliliter/second[mL/s]")
op1= 1.0E-6
else if(i1=="gallon(US)/day[gal(US)/d]")
op1= 4.3812636388889E-8
else if(i1=="gallon(US)/hour[gal(US)/h]")
op1=1.0515032733333E-6 
else if(i1=="gallon(US)/minute")
op1=6.30902E-5
else if(i1=="gallon(US)/second")
op1=0.0037854118
else if(i1=="gallon(UK)/day[gal(UK)/d]")
op1= 5.2616782407407E-8 
else if(i1=="gallon(UK)/hour[gal(UK)/h]")
op1=1.2628027777778E-6
else if(i1=="gallon(UK)/minute")
op1=7.57682E-5
else if(i1=="gallon(UK)/second")
op1=0.00454609
else if(i1=="kilobarrel(US)/day")
op1= 0.0018401307
else if(i1=="barrel(US)/day[bbl(US)/d]")
op1=1.8401307283333E-6
else if(i1=="barrel(US)/hour[bbl(US)/h]")
op1=4.41631E-5 
else if(i1=="barrel(US)/minute")
op1=0.0026497882
else if(i1=="barrel(US)/second")
op1=0.1589872949
else if(i1=="acre-foot/year[ac*ft/y]")
op1= 3.91136E-5
else if(i1=="acre-foot/day[ac*ft/d]")
op1= 0.0142764673
else if(i1=="acre-foot/hour[ac*ft/h]")
op1=0.3426352143
else if(i1=="hundred-cubicfoot/day")
op1= 3.27741E-5
else if(i1=="hundred-cubicfoot/hour")
op1=0.0007865791
else if(i1=="hundred-cubicfoot/minute")
op1=0.0471947443
else if(i1=="ounce/hour[oz/h]")
op1=8.2148693229167E-9
else if(i1=="ounce/minute[oz/min]")
op1=4.92892159375E-7
else if(i1=="ounce/second[oz/s]")
op1=2.95735E-5



if(i2=="cubicmeter/second[m^3/s]")
op2=1
else if(i2=="cubicmeter/day[m^3/d]")
op2=1.15741E-5
else if(i2=="cubicmeter/hour[m^3/h]")
op2=0.0002777778
else if(i2=="cubicmeter/minute")
op2=0.0166666667
else if(i2=="cubiccentimeter/day")
op2=1.1574074074074E-11
else if(i2=="cubiccentimeter/hour")
op2=2.7777777777778E-10
else if(i2=="cubiccentimeter/minute")
op2=1.6666666666667E-8
else if(i2=="cubiccentimeter/second")
op2=1.0E-6
else if(i2=="liter/day[L/d]")
op2=1.1574074074074E-8
else if(i2=="liter/hour[L/h]")
op2=2.7777777777778E-7
else if(i2=="liter/minute[L/min]")
op2=1.66667E-5
else if(i2=="liter/second[L/s]")
op2=0.001
else if(i2=="milliliter/day[mL/d]")
op2=1.1574074074074E-11
else if(i2=="milliliter/hour[mL/h]")
op2=2.7777777777778E-10
else if(i2=="milliliter/minute[mL/min]")
op2= 1.6666666666667E-8
else if(i2=="milliliter/second[mL/s]")
op2= 1.0E-6
else if(i2=="gallon(US)/day[gal(US)/d]")
op2= 4.3812636388889E-8
else if(i2=="gallon(US)/hour[gal(US)/h]")
op2=1.0515032733333E-6 
else if(i2=="gallon(US)/minute")
op2=6.30902E-5
else if(i2=="gallon(US)/second")
op2=0.0037854118
else if(i2=="gallon(UK)/day[gal(UK)/d]")
op2= 5.2616782407407E-8 
else if(i2=="gallon(UK)/hour[gal(UK)/h]")
op2=1.2628027777778E-6
else if(i2=="gallon(UK)/minute")
op2=7.57682E-5
else if(i2=="gallon(UK)/second")
op2=0.00454609
else if(i2=="kilobarrel(US)/day")
op2= 0.0018401307
else if(i2=="barrel(US)/day[bbl(US)/d]")
op2=1.8401307283333E-6
else if(i2=="barrel(US)/hour[bbl(US)/h]")
op2=4.41631E-5 
else if(i2=="barrel(US)/minute")
op2=0.0026497882
else if(i2=="barrel(US)/second")
op2=0.1589872949
else if(i2=="acre-foot/year[ac*ft/y]")
op2= 3.91136E-5
else if(i2=="acre-foot/day[ac*ft/d]")
op2= 0.0142764673
else if(i2=="acre-foot/hour[ac*ft/h]")
op2=0.3426352143
else if(i2=="hundred-cubicfoot/day")
op2= 3.27741E-5
else if(i2=="hundred-cubicfoot/hour")
op2=0.0007865791
else if(i2=="hundred-cubicfoot/minute")
op2=0.0471947443
else if(i2=="ounce/hour[oz/h]")
op2=8.2148693229167E-9
else if(i2=="ounce/minute[oz/min]")
op2=4.92892159375E-7
else if(i1=="ounce/second[oz/s]")
op2=2.95735E-5


    document.getElementById("in2").value=(d*op1)/op2;
 
}