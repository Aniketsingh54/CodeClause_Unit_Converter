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

    if(i1=="gray/second[Gy/s]")
    op1=1
    else if(i1=="exagray/second[EGy/s]")
    op1=1.0E+18
    else if(i1=="petagray/second[PGy/s]")
    op1=1.0E+15
    else if(i1=="teragray/second[TGy/s]")
    op1=1000000000000
    else if(i1=="gigagray/second[GGy/s]")
    op1=1000000000
    else if(i1=="megagray/second[MGy/s]")
    op1=1000000
    else if(i1=="kilogray/second[kGy/s]")
    op1=1000
    else if(i1=="hectogray/second[hGy/s]")
    op1=100
    else if(i1=="dekagray/second[daGy/s]")
    op1=10
    else if(i1=="decigray/second[dGy/s]")
    op1=0.1
    else if(i1=="centigray/second[cGy/s]")
    op1=0.01
    else if(i1=="milligray/second[mGy/s]")
    op1=0.001
    else if(i1=="microgray/second[µGy/s]")
    op1=1.0E-6
    else if(i1=="nanogray/second[nGy/s]")
    op1=1.0E-9
    else if(i1=="picogray/second[pGy/s]")
    op1=1.0E-12
    else if(i1=="femtogray/second[fGy/s]")
    op1=1.0E-15
    else if(i1=="attogray/second[aGy/s]")
    op1=1.0E-18
    else if(i1=="rad/second[rd/s,rad/s]")
    op1=0.01
    else if(i1=="joule/kilogram/second")
    op1=1
    else if(i1=="watt/kilogram[W/kg]")
    op1=1
    else if(i1=="sievert/second[Sv/s]")
    op1=1
    else if(i1=="rem/second[rem/s]")
    op1=0.01
    
    if(i2=="gray/second[Gy/s]")
    op2=1
    else if(i2=="exagray/second[EGy/s]")
    op2=1.0E+18
    else if(i2=="petagray/second[PGy/s]")
    op2=1.0E+15
    else if(i2=="teragray/second[TGy/s]")
    op2=1000000000000
    else if(i2=="gigagray/second[GGy/s]")
    op2=1000000000
    else if(i2=="megagray/second[MGy/s]")
    op2=1000000
    else if(i2=="kilogray/second[kGy/s]")
    op2=1000
    else if(i2=="hectogray/second[hGy/s]")
    op2=100
    else if(i2=="dekagray/second[daGy/s]")
    op2=10
    else if(i2=="decigray/second[dGy/s]")
    op2=0.1
    else if(i2=="centigray/second[cGy/s]")
    op2=0.01
    else if(i2=="milligray/second[mGy/s]")
    op2=0.001
    else if(i2=="microgray/second[µGy/s]")
    op2=1.0E-6
    else if(i2=="nanogray/second[nGy/s]")
    op2=1.0E-9
    else if(i2=="picogray/second[pGy/s]")
    op2=1.0E-12
    else if(i2=="femtogray/second[fGy/s]")
    op2=1.0E-15
    else if(i2=="attogray/second[aGy/s]")
    op2=1.0E-18
    else if(i2=="rad/second[rd/s,rad/s]")
    op2=0.01
    else if(i2=="joule/kilogram/second")
    op2=1
    else if(i2=="watt/kilogram[W/kg]")
    op2=1
    else if(i2=="sievert/second[Sv/s]")
    op2=1
    else if(i2=="rem/second[rem/s]")
    op2=0.01
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}