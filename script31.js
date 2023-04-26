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

    if(i1=="pascalsecond[Pa*s]")
    op1=1
    else if(i1=="kilogram-forcesecond/squaremeter")
    op1=9.80665
    else if(i1=="newtonsecond/squaremeter")
    op1=1
    else if(i1=="millinewtonsecond/sq.meter")
    op1=0.001
    else if(i1=="dynesecond/sq.centimeter")
    op1=0.1
    else if(i1=="poise[P]")
    op1=0.1
    else if(i1=="exapoise[EP]")
    op1=1.0E+17 
    else if(i1=="petapoise[PP]")
    op1=1.0E+14 
    else if(i1=="terapoise[TP]")
    op1=100000000000
    else if(i1=="gigapoise[GP]")
    op1=100000000
    else if(i1=="megapoise[MP]")
    op1=100000
    else if(i1=="kilopoise[kP]")
    op1=100
    else if(i1=="hectopoise[hP]")
    op1=10
    else if(i1=="dekapoise[daP]")
    op1=1
    else if(i1=="decipoise[dP]")
    op1=0.01
    else if(i1=="centipoise[cP]")
    op1=0.001
    else if(i1=="millipoise[mP]")
    op1= 0.0001
    else if(i1=="micropoise[µP]")
    op1= 1.0E-7
    else if(i1=="nanopoise[nP]")
    op1= 1.0E-10
    else if(i1=="picopoise[pP]")
    op1= 1.0E-13
    else if(i1=="femtopoise[fP]")
    op1= 1.0E-16
    else if(i1=="attopoise[aP]")
    op1= 1.0E-19

    
    if(i2=="pascalsecond[Pa*s]")
    op2=1
    else if(i2=="kilogram-forcesecond/squaremeter")
    op2=9.80665
    else if(i2=="newtonsecond/squaremeter")
    op2=1
    else if(i2=="millinewtonsecond/sq.meter")
    op2=0.001
    else if(i2=="dynesecond/sq.centimeter")
    op2=0.1
    else if(i2=="poise[P]")
    op2=0.1
    else if(i2=="exapoise[EP]")
    op2=1.0E+17 
    else if(i2=="petapoise[PP]")
    op2=1.0E+14 
    else if(i2=="terapoise[TP]")
    op2=100000000000
    else if(i2=="gigapoise[GP]")
    op2=100000000
    else if(i2=="megapoise[MP]")
    op2=100000
    else if(i2=="kilopoise[kP]")
    op2=100
    else if(i2=="hectopoise[hP]")
    op2=10
    else if(i2=="dekapoise[daP]")
    op2=1
    else if(i2=="decipoise[dP]")
    op2=0.01
    else if(i2=="centipoise[cP]")
    op2=0.001
    else if(i2=="millipoise[mP]")
    op2= 0.0001
    else if(i2=="micropoise[µP]")
    op2= 1.0E-7
    else if(i2=="nanopoise[nP]")
    op2= 1.0E-10
    else if(i2=="picopoise[pP]")
    op2= 1.0E-13
    else if(i2=="femtopoise[fP]")
    op2= 1.0E-16
    else if(i2=="attopoise[aP]")
    op2= 1.0E-19
    

    document.getElementById("in2").value=(d*op1)/op2;
 
}