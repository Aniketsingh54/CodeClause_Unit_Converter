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
    if(i1=="joule/cubicmeter[J/m^3]")
    op1=1
    else if(i1=="joule/liter[J/L]")
    op1=1000
    else if(i1=="megajoule/cubicmeter")
    op1=1000000
    else if(i1=="kilojoule/cubicmeter[kJ/m^3]")
    op1=1000
    else if(i1=="kilocalorie(IT)/cubicmeter")
    op1=4186.800000482
    else if(i1=="calorie(IT)/cubiccentimeter")
    op1=4186800.000482
    else if(i1=="therm/cubicfoot[therm/ft^3]")
    op1=3725894617.319 
    else if(i1=="therm/gallon(UK)")
    op1=23207984510.267
    else if(i1=="Btu(IT)/cubicfoot[Btu/ft^3]")
    op1=37258.945807808
    else if(i1=="Btu(th)/cubicfoot")
    op1=37234.028198186
    else if(i1=="CHU/cubicfoot[CHU/ft^3]")
    op1=67066.103121737
    else if(i1=="cubicmeter/joule[m^3/J]")
    op1=1
    else if(i1=="liter/joule[L/J]")
    op1=1000
    else if(i1=="gallon(US)/horsepower")
    op1=709175035.869
    else if(i1=="gallon(US)/horsepower")
    op1=699473571.46
    
    if(i2=="joule/cubicmeter[J/m^3]")
    op2=1
    else if(i2=="joule/liter[J/L]")
    op2=1000
    else if(i2=="megajoule/cubicmeter")
    op2=1000000
    else if(i2=="kilojoule/cubicmeter[kJ/m^3]")
    op2=1000
    else if(i2=="kilocalorie(IT)/cubicmeter")
    op2=4186.800000482
    else if(i2=="calorie(IT)/cubiccentimeter")
    op2=4186800.000482
    else if(i2=="therm/cubicfoot[therm/ft^3]")
    op2=3725894617.319 
    else if(i2=="therm/gallon(UK)")
    op2=23207984510.267
    else if(i2=="Btu(IT)/cubicfoot[Btu/ft^3]")
    op2=37258.945807808
    else if(i2=="Btu(th)/cubicfoot")
    op2=37234.028198186
    else if(i2=="CHU/cubicfoot[CHU/ft^3]")
    op2=67066.103121737
    else if(i2=="cubicmeter/joule[m^3/J]")
    op2=1
    else if(i2=="liter/joule[L/J]")
    op2=1000
    else if(i2=="gallon(US)/horsepower")
    op2=709175035.869
    else if(i2=="gallon(US)/horsepower")
    op2=699473571.46
    

    document.getElementById("in2").value=(d*op1)/op2;
 
}