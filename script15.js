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
    if(i1=="meter/liter[m/L]")
op1=1
else if(i1=="exameter/liter[Em/L]")
op1=1.0E+18
else if(i1=="petameter/liter[Pm/L]")
op1=1.0E+15
else if(i1=="terameter/liter[Tm/L]")
op1=1000000000000
else if(i1=="gigameter/liter[Gm/L]")
op1=1000000000
else if(i1=="megameter/liter[Mm/L]")
op1=1000000
else if(i1=="kilometer/liter[km/L]")
op1=1000
else if(i1=="hectometer/liter[hm/L]")
op1=100
else if(i1=="dekameter/liter[dam/L]")
op1=10
else if(i1=="centimeter/liter[cm/L]")
op1=0.01
else if(i1=="mile(US)/liter[mi/L]")
op1=1609.344
else if(i1=="nauticalmile/liter[n.mile/L]")
op1=1853.24496
else if(i1=="nauticalmile/gallon(US)")
op1=489.5755247
else if(i1=="kilometer/gallon(US)")
op1=264.1720524
else if(i1=="meter/gallon(US)")
op1=0.2641720524
else if(i1=="meter/gallon(UK)")
op1=0.2199687986
else if(i1=="mile/gallon(US)")
op1=425.1437075
else if(i1=="mile/gallon(UK)")
op1=354.00619
else if(i1=="meter/cubicmeter[m/m^3]")
op1=0.001
else if(i1=="meter/cubiccentimeter")
op1=0.0013079506
else if(i1=="meter/cubicyard[m/yd^3]")
op1=0.0353146667
else if(i1=="meter/cubicfoot[m/ft^3]")
op1=61.02374409
else if(i1=="meter/cubicinch[m/in^3]")
op1=1.056688209
else if(i1=="meter/quart(US)")
op1=0.8798751948
else if(i1=="meter/quart(UK)")
op1=2.113376419



if(i2=="meter/liter[m/L]")
op2=1
else if(i2=="exameter/liter[Em/L]")
op2=1.0E+18
else if(i2=="petameter/liter[Pm/L]")
op2=1.0E+15
else if(i2=="terameter/liter[Tm/L]")
op2=1000000000000
else if(i2=="gigameter/liter[Gm/L]")
op2=1000000000
else if(i2=="megameter/liter[Mm/L]")
op2=1000000
else if(i2=="kilometer/liter[km/L]")
op2=1000
else if(i2=="hectometer/liter[hm/L]")
op2=100
else if(i2=="dekameter/liter[dam/L]")
op2=10
else if(i2=="centimeter/liter[cm/L]")
op2=0.01
else if(i2=="mile(US)/liter[mi/L]")
op2=1609.344
else if(i2=="nauticalmile/liter[n.mile/L]")
op2=1853.24496
else if(i2=="nauticalmile/gallon(US)")
op2=489.5755247
else if(i2=="kilometer/gallon(US)")
op2=264.1720524
else if(i2=="meter/gallon(US)")
op2=0.2641720524
else if(i2=="meter/gallon(UK)")
op2=0.2199687986
else if(i2=="mile/gallon(US)")
op2=425.1437075
else if(i2=="mile/gallon(UK)")
op2=354.00619
else if(i2=="meter/cubicmeter[m/m^3]")
op2=0.001
else if(i2=="meter/cubiccentimeter")
op2=0.0013079506
else if(i2=="meter/cubicyard[m/yd^3]")
op2=0.0353146667
else if(i2=="meter/cubicfoot[m/ft^3]")
op2=61.02374409
else if(i2=="meter/cubicinch[m/in^3]")
op2=1.056688209
else if(i2=="meter/quart(US)")
op2=0.8798751948
else if(i2=="meter/quart(UK)")
op2=2.113376419


    document.getElementById("in2").value=(d*op1)/op2;
 
}