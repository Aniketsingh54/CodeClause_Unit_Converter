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

    if(i1=="watt/squaremeter[W/m^2]")
    op1=1
    else if(i1=="kilowatt/squaremeter")
    op1=1000
    else if(i1=="watt/squarecentimeter")
    op1=10000
    else if(i1=="watt/squareinch[W/in^2]")
    op1=1550.0031012075
    else if(i1=="joule/second/squaremeter")
    op1=1
    else if(i1=="kilocalorie(IT)/hour/squaremeter")
    op1=1.1629999999
    else if(i1=="kilocalorie(IT)/hour/squarefoot")
    op1=12.5184278205
    else if(i1=="calorie(IT)/second/squarecentimeter")
    op1=41868.00000482
    else if(i1=="calorie(IT)/minute/squarecentimeter")
    op1=697.8000000803
    else if(i1=="calorie(IT)/hour/squarecentimeter")
    op1=11.6300000008
    else if(i1=="calorie(th)/second/squarecentimeter")
    op1=41839.999999942
    else if(i1=="calorie(th)/minute/squarecentimeter")
    op1=697.3333333314
    else if(i1=="calorie(th)/hour/squarecentimeter")
    op1=11.6222222222
    else if(i1=="dyne/hour/centimeter")
    op1=2.7777777777778E-7 
    else if(i1=="erg/hour/squaremillimeter")
    op1=2.77778E-5
    else if(i1=="footpound/minute/squarefoot")
    op1=0.2432317156
    else if(i1=="horsepower/squarefoot")
    op1=8026.6466174305
    else if(i1=="horsepower(metric)/squarefoot")
    op1=7916.8426564296
    
    
    if(i2=="watt/squaremeter[W/m^2]")
    op2=1
    else if(i2=="kilowatt/squaremeter")
    op2=1000
    else if(i2=="watt/squarecentimeter")
    op2=10000
    else if(i2=="watt/squareinch[W/in^2]")
    op2=1550.0031012075
    else if(i2=="joule/second/squaremeter")
    op2=1
    else if(i2=="kilocalorie(IT)/hour/squaremeter")
    op2=1.1629999999
    else if(i2=="kilocalorie(IT)/hour/squarefoot")
    op2=12.5184278205
    else if(i2=="calorie(IT)/second/squarecentimeter")
    op2=41868.00000482
    else if(i2=="calorie(IT)/minute/squarecentimeter")
    op2=697.8000000803
    else if(i2=="calorie(IT)/hour/squarecentimeter")
    op2=11.6300000008
    else if(i2=="calorie(th)/second/squarecentimeter")
    op2=41839.999999942
    else if(i2=="calorie(th)/minute/squarecentimeter")
    op2=697.3333333314
    else if(i2=="calorie(th)/hour/squarecentimeter")
    op2=11.6222222222
    else if(i2=="dyne/hour/centimeter")
    op2=2.7777777777778E-7 
    else if(i2=="erg/hour/squaremillimeter")
    op2=2.77778E-5
    else if(i2=="footpound/minute/squarefoot")
    op2=0.2432317156
    else if(i2=="horsepower/squarefoot")
    op2=8026.6466174305
    else if(i2=="horsepower(metric)/squarefoot")
    op2=7916.8426564296
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}