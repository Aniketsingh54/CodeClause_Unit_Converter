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
    if(i1=="kilogram/liter[kg/L]")
    op1=1
    else if(i1=="gram/liter[g/L]")
    op1=0.001
    else if(i1=="milligram/liter[mg/L]")
    op1= 1.0E-6
    else if(i1=="part/million(ppm)")
    op1= 9.988590003673E-7
    else if(i1=="grain/gallon(US)[gr/gal(US)]")
    op1=1.71181E-5 
    else if(i1=="grain/gallon(UK)[gr/gal(UK)]")
    op1=1.42538E-5
    else if(i1=="pound/gallon(US)")
    op1=0.1198264284
    else if(i1=="pound/gallon(UK)")
    op1=0.0997763736
    else if(i1=="pound/milliongallon(US)")
    op1=1.1982642843713E-7
    else if(i1=="pound/milliongallon(UK)")
    op1=9.9776373608464E-8
    else if(i1=="pound/cubicfoot[lb/ft^3]")
    op1= 0.0160184635
    
    if(i2=="kilogram/liter[kg/L]")
    op2=1
    else if(i2=="gram/liter[g/L]")
    op2=0.001
    else if(i2=="milligram/liter[mg/L]")
    op2= 1.0E-6
    else if(i2=="part/million(ppm)")
    op2= 9.988590003673E-7
    else if(i2=="grain/gallon(US)[gr/gal(US)]")
    op2=1.71181E-5 
    else if(i2=="grain/gallon(UK)[gr/gal(UK)]")
    op2=1.42538E-5
    else if(i2=="pound/gallon(US)")
    op2=0.1198264284
    else if(i2=="pound/gallon(UK)")
    op2=0.0997763736
    else if(i2=="pound/milliongallon(US)")
    op2=1.1982642843713E-7
    else if(i2=="pound/milliongallon(UK)")
    op2=9.9776373608464E-8
    else if(i2=="pound/cubicfoot[lb/ft^3]")
    op2= 0.0160184635
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}