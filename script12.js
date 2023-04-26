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

    if(i1=="second[s]")
op1=1
else if(i1=="millisecond[ms]")
op1=0.001
else if(i1=="minute[min]")
op1=60
else if(i1=="hour[h]")
op1=3600
else if(i1=="day[d]")
op1=86400
else if(i1=="week")
op1=604800
else if(i1=="month")
op1=2628000
else if(i1=="year[y]")
op1=31557600
else if(i1=="decade")
op1=315576000
else if(i1=="century")
op1=3155760000
else if(i1=="millennium")
op1=31557600000
else if(i1=="microsecond[µs]")
op1=1.0E-6
else if(i1=="nanosecond[ns]")
op1=1.0E-9
else if(i1=="picosecond[ps]")
op1=1.0E-12
else if(i1=="femtosecond[fs]")
op1=1.0E-15 
else if(i1=="attosecond[as]")
op1= 1.0E-18



if(i2=="second[s]")
op2=1
else if(i2=="millisecond[ms]")
op2=0.001
else if(i2=="minute[min]")
op2=60
else if(i2=="hour[h]")
op2=3600
else if(i2=="day[d]")
op2=86400
else if(i2=="week")
op2=604800
else if(i2=="month")
op2=2628000
else if(i2=="year[y]")
op2=31557600
else if(i2=="decade")
op2=315576000
else if(i2=="century")
op2=3155760000
else if(i2=="millennium")
op2=31557600000
else if(i2=="microsecond[µs]")
op2=1.0E-6
else if(i2=="nanosecond[ns]")
op2=1.0E-9
else if(i2=="picosecond[ps]")
op2=1.0E-12
else if(i2=="femtosecond[fs]")
op2=1.0E-15 
else if(i2=="attosecond[as]")
op1= 1.0E-18
    document.getElementById("in2").value=(d*op1)/op2;
 
}