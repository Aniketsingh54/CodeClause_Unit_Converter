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
    if(i1=="joule/kilogram/K[J/(kg*K)]")
    op1=1
    else if(i1=="joule/kilogram/°C[J/(kg*°C)]")
    op1=1
    else if(i1=="joule/gram/°C[J/(g*°C)]")
    op1=1000
    else if(i1=="kilojoule/kilogram/K")
    op1=1000
    else if(i1=="kilojoule/kilogram/°C")
    op1=1000
    else if(i1=="calorie(IT)/gram/°C")
    op1=4186.8000000087
    else if(i1=="calorie(IT)/gram/°F")
    op1=4186.8000000087
    else if(i1=="calorie(th)/gram/°C")
    op1=4184
    else if(i1=="kilocalorie(IT)/kilogram/°C")
    op1=4186.8000000087
    else if(i1=="kilocalorie(th)/kilogram/°C")
    op1=4184
    else if(i1=="kilocalorie(IT)/kilogram/K")
    op1=4186.8000000087
    else if(i1=="kilocalorie(th)/kilogram/K")
    op1=4184
    
    if(i2=="joule/kilogram/K[J/(kg*K)]")
    op2=1
    else if(i2=="joule/kilogram/°C[J/(kg*°C)]")
    op2=1
    else if(i2=="joule/gram/°C[J/(g*°C)]")
    op2=1000
    else if(i2=="kilojoule/kilogram/K")
    op2=1000
    else if(i2=="kilojoule/kilogram/°C")
    op2=1000
    else if(i2=="calorie(IT)/gram/°C")
    op2=4186.8000000087
    else if(i2=="calorie(IT)/gram/°F")
    op2=4186.8000000087
    else if(i2=="calorie(th)/gram/°C")
    op2=4184
    else if(i2=="kilocalorie(IT)/kilogram/°C")
    op2=4186.8000000087
    else if(i2=="kilocalorie(th)/kilogram/°C")
    op2=4184
    else if(i2=="kilocalorie(IT)/kilogram/K")
    op2=4186.8000000087
    else if(i2=="kilocalorie(th)/kilogram/K")
    op2=4184
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}