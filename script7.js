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
    if(i1=="joule")
op1=1
else if(i1=="kilojoule")
op1=1000
else if(i1=="kilowatt-hour")
op1=3600000
else if(i1=="watt-hour")
op1=3600
else if(i1=="calorie")
op1= 4186.8
else if(i1=="gigajoule")
op1=1000000000
else if(i1=="megajoule")
op1= 1000000
else if(i1=="millijoule")
op1=0.001
else if(i1=="microjoule")
op1=1.0E-6
else if(i1=="nanojoule")
op1=1.0E-9
else if(i1=="attojoule")
op1=1.0E-18
else if(i1=="megaelectron-volt")
op1=1.6021766339999E-13
else if(i1=="kiloelectron-volt")
op1=1.6021766339999E-16
else if(i1=="electron-volt")
op1=1.6021766339999E-19
else if(i1=="erg")
op1=1.0E-7
else if(i1=="gigawatt-hour")
op1=3600000000000 
else if(i1=="megawatt-hour")
op1=3600000000
else if(i1=="kilowatt-second")
op1=1000
else if(i1=="watt-second")
op1=1
else if(i1=="newtonmeter")
op1=1
else if(i1=="horsepowerhour")
op1=2684519.5368856 


if(i2=="joule")
op2=1
else if(i2=="kilojoule")
op2=1000
else if(i2=="kilowatt-hour")
op2=3600000
else if(i2=="watt-hour")
op2=3600
else if(i2=="calorie")
op2= 4186.8
else if(i2=="gigajoule")
op2=1000000000
else if(i2=="megajoule")
op2= 1000000
else if(i2=="millijoule")
op2=0.001
else if(i2=="microjoule")
op2=1.0E-6
else if(i2=="nanojoule")
op2=1.0E-9
else if(i2=="attojoule")
op2=1.0E-18
else if(i2=="megaelectron-volt")
op2=1.6021766339999E-13
else if(i2=="kiloelectron-volt")
op2=1.6021766339999E-16
else if(i2=="electron-volt")
op2=1.6021766339999E-19
else if(i2=="erg")
op2=1.0E-7
else if(i2=="gigawatt-hour")
op2=3600000000000 
else if(i2=="megawatt-hour")
op2=3600000000
else if(i2=="kilowatt-second")
op2=1000
else if(i2=="watt-second")
op2=1
else if(i2=="newtonmeter")
op2=1
else if(i2=="horsepowerhour")
op2=2684519.5368856 
    document.getElementById("in2").value=(d*op1)/op2;
 
}