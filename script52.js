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

    if(i1=="tesla[T]")
    op1=1
    else if(i1=="weber/squaremeter")
    op1=1
    else if(i1=="weber/squarecentimeter")
    op1=10000
    else if(i1=="weber/squareinch[Wb/in^2]")
    op1=1550.0031000062
    else if(i1=="maxwell/squaremeter")
    op1=1
    else if(i1=="maxwell/squarecentimeter")
    op1=0.0001
    else if(i1=="maxwell/squareinch[Mx/in^2]")
    op1=1.55E-5
    else if(i1=="gauss[Gs,G]")
    op1=0.0001
    else if(i1=="line/squarecentimeter")
    op1=0.0001
    else if(i1=="line/squareinch")
    op1=1.55E-5
    else if(i1=="gamma")
    op1=1.0E-9
    

    if(i2=="tesla[T]")
    op2=1
    else if(i2=="weber/squaremeter")
    op2=1
    else if(i2=="weber/squarecentimeter")
    op2=10000
    else if(i2=="weber/squareinch[Wb/in^2]")
    op2=1550.0031000062
    else if(i2=="maxwell/squaremeter")
    op2=1
    else if(i2=="maxwell/squarecentimeter")
    op2=0.0001
    else if(i2=="maxwell/squareinch[Mx/in^2]")
    op2=1.55E-5
    else if(i2=="gauss[Gs,G]")
    op2=0.0001
    else if(i2=="line/squarecentimeter")
    op2=0.0001
    else if(i2=="line/squareinch")
    op2=1.55E-5
    else if(i2=="gamma")
    op2=1.0E-9
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}