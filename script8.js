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
    if(i1=="liter")
op1=1
else if(i1=="barreldry")
op1=115.6271236039 
else if (i1=="pintdry")
op1=0.5506104714
else if(i1=="quartdry")
op1=1.1012209428 
else if(i1=="peck")
op1= 8.8097675424
else if(i1=="bushel")
op1= 35.2390701696
else if(i1=="cor")
op1=219.9999892918
else if(i1=="homer")
op1=219.9999892918 
else if(i1=="ephah")
op1= 21.9999989292
else if(i1=="seah")
op1= 7.3333329764
else if(i1=="omer")
op1= 2.1999998929
else if(i1=="cab")
op1=1.2222221627
else if(i1=="log")
op1=0.3055555407

if(i2=="liter")
op2=1
else if(i2=="barreldry")
op2=115.6271236039 
else if (i2=="pintdry")
op2=0.5506104714
else if(i2=="quartdry")
op2=1.1012209428 
else if(i2=="peck")
op2= 8.8097675424
else if(i2=="bushel")
op2= 35.2390701696
else if(i2=="cor")
op2=219.9999892918
else if(i2=="homer")
op2=219.9999892918 
else if(i2=="ephah")
op2= 21.9999989292
else if(i2=="seah")
op2= 7.3333329764
else if(i2=="omer")
op2= 2.1999998929
else if(i2=="cab")
op2=1.2222221627
else if(i2=="log")
op2=0.3055555407

    document.getElementById("in2").value=(d*op1)/op2;
 
}