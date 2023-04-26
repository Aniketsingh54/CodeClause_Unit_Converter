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
    if(i1=="pascal")
op1=1
else if(i1=="kilopascal")
op1=1000 
else if(i1=="bar")
op1= 100000
else if(i1=="psi")
op1=6894.7572931783
else if(i1=="ksi")
op1=6894757.2931783
else if(i1=="Standardatmosphere")
op1=101325
else if(i1=="exapascal")
op1=1.0E+18
else if(i1=="petapascal")
op1=1.0E+15 
else if(i1=="terapascal")
op1=1000000000000
else if(i1=="gigapascal")
op1=1000000000
else if(i1=="megapascal")
op1=1000000
else if(i1=="hectopascal")
op1=100
else if(i1=="dekapascal")
op1=10
else if(i1=="decipascal")
op1= 0.1 
else if(i1=="centipascal")
op1=0.01
else if(i1=="millipascal")
op1=0.001
else if(i1=="micropascal")
op1=1.0E-6 
else if(i1=="nanopascal")
op1=1.0E-9
else if(i1=="picopascal")
op1=1.0E-12
else if(i1=="femtopascal")
op1=1.0E-15
else if(i1=="attopascal")
op1=1.0E-18
else if(i1=="newton/squaremeter")
op1=1
else if(i1=="newton/squarecentimeter")
op1= 10000
else if(i1=="newton/squaremillimeter")
op1=1000000 
else if(i1=="kilonewton/squaremeter")
op1=1000
else if(i1=="millibar")
op1=100 
else if(i1=="microbar")
op1=0.1 
else if(i1=="dyne/squarecentimeter")
op1= 0.1 
else if(i1=="kilogram-force/squaremeter")
op1=9.80665
else if(i1=="kilogram-force/sq.cm")
op1= 98066.5
else if(i1=="kilogram-force/sq.millimeter")
op1= 9806650
else if(i1=="gram-force/sq.centimeter")
op1= 98.0665

if(i2=="pascal")
op2=1
else if(i2=="kilopascal")
op2=1000 
else if(i2=="bar")
op2= 100000
else if(i2=="psi")
op2=6894.7572931783
else if(i2=="ksi")
op2=6894757.2931783
else if(i2=="Standardatmosphere")
op2=101325
else if(i2=="exapascal")
op2=1.0E+18
else if(i2=="petapascal")
op2=1.0E+15 
else if(i2=="terapascal")
op2=1000000000000
else if(i2=="gigapascal")
op2=1000000000
else if(i2=="megapascal")
op2=1000000
else if(i2=="hectopascal")
op2=100
else if(i2=="dekapascal")
op2=10
else if(i2=="decipascal")
op2= 0.1 
else if(i2=="centipascal")
op2=0.01
else if(i2=="millipascal")
op2=0.001
else if(i2=="micropascal")
op2=1.0E-6 
else if(i2=="nanopascal")
op2=1.0E-9
else if(i2=="picopascal")
op2=1.0E-12
else if(i2=="femtopascal")
op2=1.0E-15
else if(i2=="attopascal")
op2=1.0E-18
else if(i2=="newton/squaremeter")
op2=1
else if(i2=="newton/squarecentimeter")
op2= 10000
else if(i2=="newton/squaremillimeter")
op2=1000000 
else if(i2=="kilonewton/squaremeter")
op2=1000
else if(i2=="millibar")
op2=100 
else if(i2=="microbar")
op2=0.1 
else if(i2=="dyne/squarecentimeter")
op2= 0.1 
else if(i2=="kilogram-force/squaremeter")
op2=9.80665
else if(i2=="kilogram-force/sq.cm")
op2= 98066.5
else if(i2=="kilogram-force/sq.millimeter")
op2= 9806650
else if(i2=="gram-force/sq.centimeter")
op2= 98.0665
    document.getElementById("in2").value=(d*op1)/op2;
 
}