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

    if(i1=="squaremeter/second")
op1=1
else if(i1=="squaremeter/hour[m^2/h]")
op1=0.0002777778
else if(i1=="squarecentimeter/second")
op1=0.0001
else if(i1=="squaremillimeter/second")
op1=1.0E-6
else if(i1=="squarefoot/second[ft^2/s]")
op1=0.09290304
else if(i1=="squarefoot/hour[ft^2/h]")
op1= 2.58064E-5
else if(i1=="squareinch/second[in^2/s]")
op1=0.00064516
else if(i1=="stokes[St]")
op1=0.0001
else if(i1=="exastokes[ESt]")
op1=1.0E+14
else if(i1=="petastokes[PSt]")
op1=100000000000
else if(i1=="terastokes[TSt]")
op1=100000000
else if(i1=="gigastokes[GSt]")
op1=100000
else if(i1=="megastokes[MSt]")
op1=100
else if(i1=="kilostokes[kSt]")
op1=0.1
else if(i1=="hectostokes[hSt]")
op1=0.01
else if(i1=="dekastokes[daSt]")
op1=0.001
else if(i1=="decistokes[dSt]")
op1=1.0E-5
else if(i1=="centistokes[cSt]")
op1=1.0E-6
else if(i1=="millistokes[mSt]")
op1= 1.0E-7
else if(i1=="microstokes[µSt]")
op1=1.0E-10
else if(i1=="nanostokes[nSt]")
op1=1.0E-13
else if(i1=="picostokes[pSt]")
op1=1.0E-16
else if(i1=="femtostokes[fSt]")
op1=1.0E-19
else if(i1=="attostokes[aSt]")
op1=1.0E-22


if(i2=="squaremeter/second")
op2=1
else if(i2=="squaremeter/hour[m^2/h]")
op2=0.0002777778
else if(i2=="squarecentimeter/second")
op2=0.0001
else if(i2=="squaremillimeter/second")
op2=1.0E-6
else if(i2=="squarefoot/second[ft^2/s]")
op2=0.09290304
else if(i2=="squarefoot/hour[ft^2/h]")
op2= 2.58064E-5
else if(i2=="squareinch/second[in^2/s]")
op2=0.00064516
else if(i2=="stokes[St]")
op2=0.0001
else if(i2=="exastokes[ESt]")
op2=1.0E+14
else if(i2=="petastokes[PSt]")
op2=100000000000
else if(i2=="terastokes[TSt]")
op2=100000000
else if(i2=="gigastokes[GSt]")
op2=100000
else if(i2=="megastokes[MSt]")
op2=100
else if(i2=="kilostokes[kSt]")
op2=0.1
else if(i2=="hectostokes[hSt]")
op2=0.01
else if(i2=="dekastokes[daSt]")
op2=0.001
else if(i2=="decistokes[dSt]")
op2=1.0E-5
else if(i2=="centistokes[cSt]")
op2=1.0E-6
else if(i2=="millistokes[mSt]")
op2= 1.0E-7
else if(i2=="microstokes[µSt]")
op2=1.0E-10
else if(i2=="nanostokes[nSt]")
op2=1.0E-13
else if(i2=="picostokes[pSt]")
op2=1.0E-16
else if(i2=="femtostokes[fSt]")
op2=1.0E-19
else if(i2=="attostokes[aSt]")
op2=1.0E-22


    document.getElementById("in2").value=(d*op1)/op2;
 
}