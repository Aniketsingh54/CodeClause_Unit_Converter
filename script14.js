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
    
    if(i1=="degree[°]")
op1=1
else if(i1=="radian[rad]")
op1=57.2957795131
else if(i1=="grad[^g]")
op1=0.9
else if(i1=="minute[']")
op1=0.0166666667
else if(i1=="second[\"]")
op1=0.0002777778
else if(i1=="gon")
op1=0.9
else if(i1=="sign")
op1=30
else if(i1=="mil")
op1=0.05625
else if(i1=="revolution[r]")
op1=360
else if(i1=="circle")
op1=360
else if(i1=="turn")
op1=360
else if(i1=="quadrant")
op1=90
else if(i1=="rightangle")
op1=90
else if(i1=="sextant")
op1=60


if(i2=="degree[°]")
op2=1
else if(i2=="radian[rad]")
op2=57.2957795131
else if(i2=="grad[^g]")
op2=0.9
else if(i2=="minute[']")
op2=0.0166666667
else if(i2=="second[\"]")
op2=0.0002777778
else if(i2=="gon")
op2=0.9
else if(i2=="sign")
op2=30
else if(i2=="mil")
op2=0.05625
else if(i2=="revolution[r]")
op2=360
else if(i2=="circle")
op2=360
else if(i2=="turn")
op2=360
else if(i2=="quadrant")
op2=90
else if(i2=="rightangle")
op2=90
else if(i2=="sextant")
op2=60
    document.getElementById("in2").value=(d*op1)/op2;
 
}