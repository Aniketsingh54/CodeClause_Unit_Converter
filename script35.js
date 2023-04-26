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

    if(i1=="candela/squaremeter")
    op1=1
    else if(i1=="candela/squarecentimeter")
    op1=10000
    else if(i1=="candela/squarefoot")
    op1=10.7639104167
    else if(i1=="candela/squareinch")
    op1=1550.0031000062
    else if(i1=="kilocandela/squaremeter")
    op1=1000
    else if(i1=="stilb[sb]")
    op1=10000
    else if(i1=="lumen/sq.meter/steradian")
    op1=1
    else if(i1=="lumen/sq.cm/steradian")
    op1=10000
    else if(i1=="lumen/squarefoot/steradian")
    op1=10.7639104167
    else if(i1=="watt/sq.cm/steradian(at555nm)")
    op1=6830000
    
    
    if(i2=="candela/squaremeter")
    op2=1
    else if(i2=="candela/squarecentimeter")
    op2=10000
    else if(i2=="candela/squarefoot")
    op2=10.7639104167
    else if(i2=="candela/squareinch")
    op2=1550.0031000062
    else if(i2=="kilocandela/squaremeter")
    op2=1000
    else if(i2=="stilb[sb]")
    op2=10000
    else if(i2=="lumen/sq.meter/steradian")
    op2=1
    else if(i2=="lumen/sq.cm/steradian")
    op2=10000
    else if(i2=="lumen/squarefoot/steradian")
    op2=10.7639104167
    else if(i2=="watt/sq.cm/steradian(at555nm)")
    op2=6830000
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}