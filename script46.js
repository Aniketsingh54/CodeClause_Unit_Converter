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

    if(i1=="joule/squaremeter[J/m^2]")
    op1=1
    else if(i1=="calorie(th)/squarecentimeter")
    op1=41839.999999999
    else if(i1=="langley")
    op1=41839.999999999
    else if(i1=="Btu(IT)/squarefoot")
    op1=11356.526682227
    else if(i1=="Btu(th)/squarefoot")
    op1=11348.931794793
    


    if(i2=="joule/squaremeter[J/m^2]")
    op2=1
    else if(i2=="calorie(th)/squarecentimeter")
    op2=41839.999999999
    else if(i2=="langley")
    op2=41839.999999999
    else if(i2=="Btu(IT)/squarefoot")
    op2=11356.526682227
    else if(i2=="Btu(th)/squarefoot")
    op2=11348.931794793
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}