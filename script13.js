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
    if(i1=="meter/second[m/s]")
    op1=1
    else if(i1=="kilometer/hour[km/h]")
    op1=0.2777777778
    else if(i1=="mile/hour[mi/h]")
    op1=0.44704
    else if(i1=="meter/hour[m/h]")
    op1=0.0002777778
    else if(i1=="meter/minute[m/min]")
    op1=0.0166666667
    else if(i1=="kilometer/minute[km/min]")
    op1=16.6666666667
    else if(i1=="kilometer/second[km/s]")
    op1=1000
    else if(i1=="centimeter/hour[cm/h]")
    op1= 2.7777777777778E-6
    else if(i1=="centimeter/minute[cm/min]")
    op1=0.0001666667
    else if(i1=="centimeter/second[cm/s]")
    op1=0.01
    else if(i1=="millimeter/hour[mm/h]")
    op1=2.7777777777778E-7
    else if(i1=="millimeter/minute[mm/min]")
    op1= 1.66667E-5
    else if(i1=="millimeter/second[mm/s]")
    op1=0.001
    else if(i1=="foot/hour[ft/h]")
    op1=8.46667E-5
    else if(i1=="foot/minute[ft/min]")
    op1=0.00508
    else if(i1=="foot/second[ft/s]")
    op1=0.3048
    else if(i1=="yard/hour[yd/h]")
    op1=0.000254
    else if(i1=="yard/minute[yd/min]")
    op1=0.01524
    else if(i1=="yard/second[yd/s]")
    op1=0.9144
    else if(i1=="mile/minute[mi/min]")
    op1=26.8224
    else if(i1=="mile/second[mi/s]")
    op1=1609.344
    


    if(i2=="meter/second[m/s]")
    op2=1
    else if(i2=="kilometer/hour[km/h]")
    op2=0.2777777778
    else if(i2=="mile/hour[mi/h]")
    op2=0.44704
    else if(i2=="meter/hour[m/h]")
    op2=0.0002777778
    else if(i2=="meter/minute[m/min]")
    op2=0.0166666667
    else if(i2=="kilometer/minute[km/min]")
    op2=16.6666666667
    else if(i2=="kilometer/second[km/s]")
    op2=1000
    else if(i2=="centimeter/hour[cm/h]")
    op2= 2.7777777777778E-6
    else if(i2=="centimeter/minute[cm/min]")
    op2=0.0001666667
    else if(i2=="centimeter/second[cm/s]")
    op2=0.01
    else if(i2=="millimeter/hour[mm/h]")
    op2=2.7777777777778E-7
    else if(i2=="millimeter/minute[mm/min]")
    op2= 1.66667E-5
    else if(i2=="millimeter/second[mm/s]")
    op2=0.001
    else if(i2=="foot/hour[ft/h]")
    op2=8.46667E-5
    else if(i2=="foot/minute[ft/min]")
    op2=0.00508
    else if(i2=="foot/second[ft/s]")
    op2=0.3048
    else if(i2=="yard/hour[yd/h]")
    op2=0.000254
    else if(i2=="yard/minute[yd/min]")
    op2=0.01524
    else if(i2=="yard/second[yd/s]")
    op2=0.9144
    else if(i2=="mile/minute[mi/min]")
    op2=26.8224
    else if(i2=="mile/second[mi/s]")
    op2=1609.344
    document.getElementById("in2").value=(d*op1)/op2;
 
}