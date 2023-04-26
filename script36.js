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

    if(i1=="candle(international)[c]")
op1=1
else if(i1=="candle(German)[c(German)]")
op1=1.0526315789
else if(i1=="candle(UK)[c(UK)]")
op1=1.0416666667
else if(i1=="decimalcandle")
op1=1
else if(i1=="candle(pentane)")
op1=1
else if(i1=="pentanecandle(10candlepower)")
op1=10
else if(i1=="hefnercandle")
op1=0.9000000001
else if(i1=="carcelunit")
op1=9.610000003
else if(i1=="bougiedecimal")
op1=1
else if(i1=="lumen/steradian[lm/sr]")
op1=1

if(i2=="candle(international)[c]")
op2=1
else if(i2=="candle(German)[c(German)]")
op2=1.0526315789
else if(i2=="candle(UK)[c(UK)]")
op2=1.0416666667
else if(i2=="decimalcandle")
op2=1
else if(i2=="candle(pentane)")
op2=1
else if(i2=="pentanecandle(10candlepower)")
op2=10
else if(i2=="hefnercandle")
op2=0.9000000001
else if(i2=="carcelunit")
op2=9.610000003
else if(i2=="bougiedecimal")
op2=1
else if(i2=="lumen/steradian[lm/sr]")
op2=1

    document.getElementById("in2").value=(d*op1)/op2;
 
}