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

    if(i1=="watt/squaremeter/K")
    op1=1
    else if(i1=="watt/squaremeter/%b0C")
    op1=1
    else if(i1=="joule/second/squaremeter/K")
    op1=1
    else if(i1=="calorie(IT)/second/squarecentimeter/%b0C")
    op1=41868.00000482
    else if(i1=="kilocalorie(IT)/hour/squaremeter/%b0C")
    op1=1.163
    else if(i1=="kilocalorie(IT)/hour/squarefoot/%b0C")
    op1=12.5184278205
    else if(i1=="Btu(IT)/second/squarefoot/%b0F")
    op1=20441.748028012
    else if(i1=="Btu(th)/second/squarefoot/%b0F")
    op1=20428.077230618
    else if(i1=="Btu(IT)/hour/squarefoot/%b0F")
    op1=5.6782633411
    else if(i1=="Btu(th)/hour/squarefoot/%b0F")
    op1=5.6744658974
    else if(i1=="CHU/hour/squarefoot/%b0C")
    op1=5.6782633411
    
    if(i2=="watt/squaremeter/K")
    op2=1
    else if(i2=="watt/squaremeter/%b0C")
    op2=1
    else if(i2=="joule/second/squaremeter/K")
    op2=1
    else if(i2=="calorie(IT)/second/squarecentimeter/%b0C")
    op2=41868.00000482
    else if(i2=="kilocalorie(IT)/hour/squaremeter/%b0C")
    op2=1.163
    else if(i2=="kilocalorie(IT)/hour/squarefoot/%b0C")
    op2=12.5184278205
    else if(i2=="Btu(IT)/second/squarefoot/%b0F")
    op2=20441.748028012
    else if(i2=="Btu(th)/second/squarefoot/%b0F")
    op2=20428.077230618
    else if(i2=="Btu(IT)/hour/squarefoot/%b0F")
    op2=5.6782633411
    else if(i2=="Btu(th)/hour/squarefoot/%b0F")
    op2=5.6744658974
    else if(i2=="CHU/hour/squarefoot/%b0C")
    op2=5.6782633411
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}