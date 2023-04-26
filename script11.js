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
    if(i1=="newton[N]")
op1=1
else if(i1=="kilonewton[kN]")
op1=1000
else if(i1=="gram-force[gf]")
op1=0.00980665
else if(i1=="kilogram-force[kgf]")
op1=9.80665
else if(i1=="ton-force(met")
op1=9806.65
else if(i1=="exanewton[EN]")
op1= 1.0E+18
else if(i1=="petanewton[PT]")
op1=1.0E+15
else if(i1=="teranewton[TN]")
op1=1000000000000
else if(i1=="giganewton[GN]")
op1=1000000000
else if(i1=="meganewton[MN]")
op1=1000000
else if(i1=="hectonewton[hN]")
op1=100
else if(i1=="dekanewton[daN]")
op1=10
else if(i1=="decinewton[dN]")
op1=0.1
else if(i1=="centinewton[cN]")
op1=0.01
else if(i1=="millinewton[mN]")
op1=0.001
else if(i1=="micronewton[µN]")
op1= 1.0E-6
else if(i1=="nanonewton[nN]")
op1= 1.0E-9 
else if(i1=="piconewton[pN]")
op1=1.0E-12
else if(i1=="femtonewton[fN]")
op1= 1.0E-15
else if(i1=="attonewton[aN]")
op1=1.0E-18
else if(i1=="dyne[dyn]")
op1=1.0E-5 
else if(i1=="joule/meter[J/m]")
op1=1
else if(i1=="joule/centimeter[J/cm]")
op1=0.01


if(i2=="newton[N]")
op2=1
else if(i2=="kilonewton[kN]")
op2=1000
else if(i2=="gram-force[gf]")
op2=0.00980665
else if(i2=="kilogram-force[kgf]")
op2=9.80665
else if(i2=="ton-force(met")
op2=9806.65
else if(i2=="exanewton[EN]")
op2= 1.0E+18
else if(i2=="petanewton[PT]")
op2=1.0E+15
else if(i2=="teranewton[TN]")
op2=1000000000000
else if(i2=="giganewton[GN]")
op2=1000000000
else if(i2=="meganewton[MN]")
op2=1000000
else if(i2=="hectonewton[hN]")
op2=100
else if(i2=="dekanewton[daN]")
op2=10
else if(i2=="decinewton[dN]")
op2=0.1
else if(i2=="centinewton[cN]")
op2=0.01
else if(i2=="millinewton[mN]")
op2=0.001
else if(i2=="micronewton[µN]")
op2= 1.0E-6
else if(i2=="nanonewton[nN]")
op2= 1.0E-9 
else if(i2=="piconewton[pN]")
op2=1.0E-12
else if(i2=="femtonewton[fN]")
op2= 1.0E-15
else if(i2=="attonewton[aN]")
op2=1.0E-18
else if(i2=="dyne[dyn]")
op2=1.0E-5 
else if(i2=="joule/meter[J/m]")
op2=1
else if(i2=="joule/centimeter[J/cm]")
op2=0.01

    document.getElementById("in2").value=(d*op1)/op2;
 
}