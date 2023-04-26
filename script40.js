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

    if(i1=="joule/kilogram[J/kg]")
    op1=1
    else if(i1=="kilojoule/kilogram[kJ/kg]")
    op1=1000
    else if(i1=="calorie(IT)/gram[cal/g]")
    op1=4186.8
    else if(i1=="calorie(th)/gram[cal(th)/g]")
    op1=4184.000000005
    else if(i1=="Btu(IT)/pound[Btu/lb]")
    op1=2326
    else if(i1=="Btu(th)/pound[Btu(th)/lb]")
    op1=2324.4444444446
    else if(i1=="kilogram/joule[kg/J]")
    op1=1
    else if(i1=="kilogram/kilojoule[kg/kJ]")
    op1=1000
    else if(i1=="gram/calorie(IT)[g/cal]")
    op1=4186.8
    else if(i1=="gram/calorie(th)[g/cal(th)]")
    op1=4184.000000005
    else if(i1=="pound/Btu(IT)[lb/Btu]")
    op1=2326
    else if(i1=="pound/Btu(th)[lb/Btu(th)]")
    op1=2324.4444444446
    else if(i1=="pound/horsepower/hour")
    op1=5918352.5016
    else if(i1=="gram/horsepower(metric)/hour")
    op1=2647795500
    else if(i1=="gram/kilowatt/hour")
    op1=3600000000
 
    
    if(i2=="joule/kilogram[J/kg]")
    op2=1
    else if(i2=="kilojoule/kilogram[kJ/kg]")
    op2=1000
    else if(i2=="calorie(IT)/gram[cal/g]")
    op2=4186.8
    else if(i2=="calorie(th)/gram[cal(th)/g]")
    op2=4184.000000005
    else if(i2=="Btu(IT)/pound[Btu/lb]")
    op2=2326
    else if(i2=="Btu(th)/pound[Btu(th)/lb]")
    op2=2324.4444444446
    else if(i2=="kilogram/joule[kg/J]")
    op2=1
    else if(i2=="kilogram/kilojoule[kg/kJ]")
    op2=1000
    else if(i2=="gram/calorie(IT)[g/cal]")
    op2=4186.8
    else if(i2=="gram/calorie(th)[g/cal(th)]")
    op2=4184.000000005
    else if(i2=="pound/Btu(IT)[lb/Btu]")
    op2=2326
    else if(i2=="pound/Btu(th)[lb/Btu(th)]")
    op2=2324.4444444446
    else if(i2=="pound/horsepower/hour")
    op2=5918352.5016
    else if(i2=="gram/horsepower(metric)/hour")
    op2=2647795500
    else if(i2=="gram/kilowatt/hour")
    op2=3600000000
 
    document.getElementById("in2").value=(d*op1)/op2;
 
}