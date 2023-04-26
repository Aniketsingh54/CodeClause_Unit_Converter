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

    if(i1=="newtonmeter[N*m]")
    op1=1
    else if(i1=="newtoncentimeter[N*cm]")
    op1=0.01
    else if(i1=="newtonmillimeter[N*mm]")
    op1=0.001
    else if(i1=="kilonewtonmeter[kN*m]")
    op1=1000
    else if(i1=="dynemeter[dyn*m]")
    op1=1.0E-5
    else if(i1=="dynecentimeter[dyn*cm]")
    op1=1.0E-7
    else if(i1=="dynemillimeter[dyn*mm]")
    op1=1.0E-8
    else if(i1=="kilogram-forcemeter")
    op1=9.80665
    else if(i1=="kilogram-forcecentimeter")
    op1=0.0980665
    else if(i1=="kilogram-forcemillimeter")
    op1=0.00980665
    else if(i1=="gram-forcemeter[gf*m]")
    op1=0.00980665
    else if(i1=="gram-forcecentimeter")
    op1= 9.80665E-5
    else if(i1=="gram-forcemillimeter")
    op1= 9.80665E-6
    

    if(i2=="newtonmeter[N*m]")
    op2=1
    else if(i2=="newtoncentimeter[N*cm]")
    op2=0.01
    else if(i2=="newtonmillimeter[N*mm]")
    op2=0.001
    else if(i2=="kilonewtonmeter[kN*m]")
    op2=1000
    else if(i2=="dynemeter[dyn*m]")
    op2=1.0E-5
    else if(i2=="dynecentimeter[dyn*cm]")
    op2=1.0E-7
    else if(i2=="dynemillimeter[dyn*mm]")
    op2=1.0E-8
    else if(i2=="kilogram-forcemeter")
    op2=9.80665
    else if(i2=="kilogram-forcecentimeter")
    op2=0.0980665
    else if(i2=="kilogram-forcemillimeter")
    op2=0.00980665
    else if(i2=="gram-forcemeter[gf*m]")
    op2=0.00980665
    else if(i2=="gram-forcecentimeter")
    op2= 9.80665E-5
    else if(i2=="gram-forcemillimeter")
    op2= 9.80665E-6
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}