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

    if(i1=="radian/second[rad/s]")
op1=1
else if(i1=="radian/day[rad/d]")
op1=1.15741E-5
else if(i1=="radian/hour[rad/h]")
op1=0.0002777778
else if(i1=="radian/minute[rad/min]")
op1=0.0166666667
else if(i1=="degree/day[°/d]")
op1= 2.0200570046231E-7
else if(i1=="degree/hour[°/h]")
op1=4.8481368110954E-6
else if(i1=="degree/minute[°/min]")
op1=0.0002908882
else if(i1=="degree/second[°/s]")
op1=0.0174532925
else if(i1=="revolution/day[r/d]")
op1=7.27221E-5
else if(i1=="revolution/hour[r/h]")
op1=0.0017453293
else if(i1=="revolution/minute[r/min]")
op1=0.1047197551
else if(i1=="revolution/second[r/s]")
op1=6.2831853072


if(i2=="radian/second[rad/s]")
op2=1
else if(i2=="radian/day[rad/d]")
op2=1.15741E-5
else if(i2=="radian/hour[rad/h]")
op2=0.0002777778
else if(i2=="radian/minute[rad/min]")
op2=0.0166666667
else if(i2=="degree/day[°/d]")
op2= 2.0200570046231E-7
else if(i2=="degree/hour[°/h]")
op2=4.8481368110954E-6
else if(i2=="degree/minute[°/min]")
op2=0.0002908882
else if(i2=="degree/second[°/s]")
op2=0.0174532925
else if(i2=="revolution/day[r/d]")
op2=7.27221E-5
else if(i2=="revolution/hour[r/h]")
op2=0.0017453293
else if(i2=="revolution/minute[r/min]")
op2=0.1047197551
else if(i2=="revolution/second[r/s]")
op2=6.2831853072
    document.getElementById("in2").value=(d*op1)/op2;
 
}