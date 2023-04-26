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
    if(i1=="watt/meter/K[W/(m*K)]")
    op1=1
    else if(i1=="watt/centimeter/°C")
    op1=100
    else if(i1=="kilowatt/meter/K[kW/(m*K)]")
    op1=1000
    else if(i1=="calorie(IT)/second/cm/°C")
    op1=418.6800000009
    else if(i1=="calorie(th)/second/cm/°C")
    op1=418.3999999994
    else if(i1=="kilocalorie(IT)/hour/meter/°C")
    op1=1.163
    else if(i1=="kilocalorie(th)/hour/meter/°C")
    op1=1.1622222222
    else if(i1=="Btu(IT)inch/second/sq.foot/°F")
    op1=519.2203999105
    else if(i1=="Btu(th)inch/second/sq.foot/°F")
    op1=518.8731616576
    else if(i1=="Btu(IT)foot/hour/sq.foot/°F")
    op1=1.7307346664
    else if(i1=="Btu(th)foot/hour/sq.foot/°F")
    op1=1.7295772055
    else if(i1=="Btu(IT)inch/hour/sq.foot/°F")
    op1=0.1442278889
    else if(i1=="Btu(th)inch/hour/sq.foot/°F")
    op1=0.1441314338
    
    if(i2=="watt/meter/K[W/(m*K)]")
    op2=1
    else if(i2=="watt/centimeter/°C")
    op2=100
    else if(i2=="kilowatt/meter/K[kW/(m*K)]")
    op2=1000
    else if(i2=="calorie(IT)/second/cm/°C")
    op2=418.6800000009
    else if(i2=="calorie(th)/second/cm/°C")
    op2=418.3999999994
    else if(i2=="kilocalorie(IT)/hour/meter/°C")
    op2=1.163
    else if(i2=="kilocalorie(th)/hour/meter/°C")
    op2=1.1622222222
    else if(i2=="Btu(IT)inch/second/sq.foot/°F")
    op2=519.2203999105
    else if(i2=="Btu(th)inch/second/sq.foot/°F")
    op2=518.8731616576
    else if(i2=="Btu(IT)foot/hour/sq.foot/°F")
    op2=1.7307346664
    else if(i2=="Btu(th)foot/hour/sq.foot/°F")
    op2=1.7295772055
    else if(i2=="Btu(IT)inch/hour/sq.foot/°F")
    op2=0.1442278889
    else if(i2=="Btu(th)inch/hour/sq.foot/°F")
    op2=0.1441314338
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}