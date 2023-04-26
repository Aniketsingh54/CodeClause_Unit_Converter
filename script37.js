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

    if(i1=="lux[lx]")
    op1=1
    else if(i1=="meter-candle[m*c]")
    op1=1
    else if(i1=="centimeter-candle[cm*c]")
    op1=10000
    else if(i1=="foot-candle[ft*c,fc]")
    op1=10.7639104167
    else if(i1=="flame")
    op1=43.0556416668
    else if(i1=="phot[ph]")
    op1=10000
    else if(i1=="nox")
    op1=0.001
    else if(i1=="candelasteradian/sq.meter")
    op1=1
    else if(i1=="lumen/squaremeter[lm/m^2]")
    op1=1
    else if(i1=="lumen/squarecentimeter")
    op1=10000
    else if(i1=="lumen/squarefoot[lm/ft^2]")
    op1=10.7639104167
    else if(i1=="watt/sq.cm(at555nm)")
    op1=6830000
    
    if(i2=="lux[lx]")
    op2=1
    else if(i2=="meter-candle[m*c]")
    op2=1
    else if(i2=="centimeter-candle[cm*c]")
    op2=10000
    else if(i2=="foot-candle[ft*c,fc]")
    op2=10.7639104167
    else if(i2=="flame")
    op2=43.0556416668
    else if(i2=="phot[ph]")
    op2=10000
    else if(i2=="nox")
    op2=0.001
    else if(i2=="candelasteradian/sq.meter")
    op2=1
    else if(i2=="lumen/squaremeter[lm/m^2]")
    op2=1
    else if(i2=="lumen/squarecentimeter")
    op2=10000
    else if(i2=="lumen/squarefoot[lm/ft^2]")
    op2=10.7639104167
    else if(i2=="watt/sq.cm(at555nm)")
    op2=6830000
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}