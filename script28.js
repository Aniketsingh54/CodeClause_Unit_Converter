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

    if(i1=="gram/second/squaremeter")
    op1=1
    else if(i1=="kilogram/hour/squaremeter")
    op1=0.2777777778
    else if(i1=="kilogram/hour/squarefoot")
    op1=2.9899751173
    else if(i1=="kilogram/second/squaremeter")
    op1=1000
    else if(i1=="gram/second/sq.centimeter")
    op1=10000
    else if(i1=="pound/hour/squarefoot")
    op1=1.3562299132
    else if(i1=="pound/second/squarefoot")
    op1=4882.4276872752
    
    if(i2=="gram/second/squaremeter")
    op2=1
    else if(i2=="kilogram/hour/squaremeter")
    op2=0.2777777778
    else if(i2=="kilogram/hour/squarefoot")
    op2=2.9899751173
    else if(i2=="kilogram/second/squaremeter")
    op2=1000
    else if(i2=="gram/second/sq.centimeter")
    op2=10000
    else if(i2=="pound/hour/squarefoot")
    op2=1.3562299132
    else if(i2=="pound/second/squarefoot")
    op2=4882.4276872752
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}