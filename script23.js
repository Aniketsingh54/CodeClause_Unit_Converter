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
     if(i1=="newtonmeter[N*m]")
op1=1
else if(i1=="kilonewtonmeter[kN*m]")
op1=1000
else if(i1=="millinewtonmeter[mN*m]")
op1=0.001
else if(i1=="micronewtonmeter[µN*m]")
op1=1.0E-6
else if(i1=="ton-force(short)meter")
op1=8896.4400000035
else if(i1=="ton-force(long)meter")
op1=9964.0200000047
else if(i1=="ton-force(metric)meter")
op1=9806.6499999993
else if(i1=="kilogram-forcemeter[kgf*m]")
op1=9.80665
else if(i1=="gram-forcecentimeter")
op1=9.80665E-5
else if(i1=="pound-forcefoot[lbf*ft]")
op1=1.35582


if(i2=="newtonmeter[N*m]")
op2=1
else if(i2=="kilonewtonmeter[kN*m]")
op2=1000
else if(i2=="millinewtonmeter[mN*m]")
op2=0.001
else if(i2=="micronewtonmeter[µN*m]")
op2=1.0E-6
else if(i2=="ton-force(short)meter")
op2=8896.4400000035
else if(i2=="ton-force(long)meter")
op2=9964.0200000047
else if(i2=="ton-force(metric)meter")
op2=9806.6499999993
else if(i2=="kilogram-forcemeter[kgf*m]")
op2=9.80665
else if(i2=="gram-forcecentimeter")
op2=9.80665E-5
else if(i2=="pound-forcefoot[lbf*ft]")
op2=1.35582


    document.getElementById("in2").value=(d*op1)/op2;
 
}