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
    
    if(i1=="watt")
op1=1
else if(i1=="exawatt")
op1=1.0E+18
else if(i1=="petawatt")
op1=1.0E+15
else if(i1=="terawatt")
op1=1000000000000
else if(i1=="gigawatt")
op1=1000000000
else if(i1=="megawatt")
op1=1000000
else if(i1=="kilowatt")
op1=1000
else if(i1=="hectowatt")
op1=100
else if(i1=="dekawatt")
op1=10
else if(i1=="deciwatt")
op1=0.1
else if(i1=="centiwatt")
op1=0.01
else if(i1=="milliwatt")
op1=0.001
else if(i1=="microwatt")
op1=1.0E-6
else if(i1=="nanowatt")
op1=1.0E-9
else if(i1=="picowatt")
op1=1.0E-12
else if(i1=="femtowatt")
op1=1.0E-15
else if(i1=="attowatt")
op1=1.0E-18 
else if(i1=="horsepower")
op1=745.6998715823



if(i2=="watt")
op2=1
else if(i2=="exawatt")
op2=1.0E+18
else if(i2=="petawatt")
op2=1.0E+15
else if(i2=="terawatt")
op2=1000000000000
else if(i2=="gigawatt")
op2=1000000000
else if(i2=="megawatt")
op2=1000000
else if(i2=="kilowatt")
op2=1000
else if(i2=="hectowatt")
op2=100
else if(i2=="dekawatt")
op2=10
else if(i2=="deciwatt")
op2=0.1
else if(i2=="centiwatt")
op2=0.01
else if(i2=="milliwatt")
op2=0.001
else if(i2=="microwatt")
op2=1.0E-6
else if(i2=="nanowatt")
op2=1.0E-9
else if(i2=="picowatt")
op2=1.0E-12
else if(i2=="femtowatt")
op2=1.0E-15
else if(i2=="attowatt")
op2=1.0E-18 
else if(i2=="horsepower")
op2=745.6998715823


    document.getElementById("in2").value=(d*op1)/op2;
 
}