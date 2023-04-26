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

    if(i1=="rad[rd]")
    op1=1
    else if(i1=="millirad[mrd]")
    op1=0.001
    else if(i1=="joule/kilogram[J/kg]")
    op1=100
    else if(i1=="joule/gram[J/g]")
    op1=100000
    else if(i1=="joule/centigram[J/cg]")
    op1=10000000
    else if(i1=="joule/milligram[J/mg]")
    op1=100000000
    else if(i1=="gray[Gy]")
    op1=100
    else if(i1=="exagray[EGy]")
    op1=1.0E+20 
    else if(i1=="petagray[PGy]")
    op1=1.0E+17
    else if(i1=="teragray[TGy]")
    op1=1.0E+14
    else if(i1=="gigagray[GGy]")
    op1=100000000000
    else if(i1=="megagray[MGy]")
    op1=100000000
    else if(i1=="kilogray[kGy]")
    op1=100000
    else if(i1=="hectogray[hGy]")
    op1=10000
    else if(i1=="dekagray[daGy]")
    op1=1000
    else if(i1=="decigray[dGy]")
    op1=10
    else if(i1=="centigray[cGy]")
    op1=1
    else if(i1=="milligray[mGy]")
    op1=0.1
    else if(i1=="microgray[µGy]")
    op1=0.0001
    else if(i1=="nanogray[nGy]")
    op1=1.0E-7
    else if(i1=="picogray[pGy]")
    op1=1.0E-10
    else if(i1=="femtogray[fGy]")
    op1=1.0E-13 
    else if(i1=="attogray[aGy]")
    op1=1.0E-16
    
    
    if(i2=="rad[rd]")
    op2=1
    else if(i2=="millirad[mrd]")
    op2=0.001
    else if(i2=="joule/kilogram[J/kg]")
    op2=100
    else if(i2=="joule/gram[J/g]")
    op2=100000
    else if(i2=="joule/centigram[J/cg]")
    op2=10000000
    else if(i2=="joule/milligram[J/mg]")
    op2=100000000
    else if(i2=="gray[Gy]")
    op2=100
    else if(i2=="exagray[EGy]")
    op2=1.0E+20 
    else if(i2=="petagray[PGy]")
    op2=1.0E+17
    else if(i2=="teragray[TGy]")
    op2=1.0E+14
    else if(i2=="gigagray[GGy]")
    op2=100000000000
    else if(i2=="megagray[MGy]")
    op2=100000000
    else if(i2=="kilogray[kGy]")
    op2=100000
    else if(i2=="hectogray[hGy]")
    op2=10000
    else if(i2=="dekagray[daGy]")
    op2=1000
    else if(i2=="decigray[dGy]")
    op2=10
    else if(i2=="centigray[cGy]")
    op2=1
    else if(i2=="milligray[mGy]")
    op2=0.1
    else if(i2=="microgray[µGy]")
    op2=0.0001
    else if(i2=="nanogray[nGy]")
    op2=1.0E-7
    else if(i2=="picogray[pGy]")
    op2=1.0E-10
    else if(i2=="femtogray[fGy]")
    op2=1.0E-13 
    else if(i2=="attogray[aGy]")
    op2=1.0E-16
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}