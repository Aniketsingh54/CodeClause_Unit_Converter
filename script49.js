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

    if(i1=="ampereturn[At]")
    op1=1
    else if(i1=="kiloampereturn[kAt]")
    op1=1000
    else if(i1=="milliampereturn[mAt]")
    op1=0.001
    else if(i1=="abampereturn[abAt]")
    op1=10
    else if(i1=="gilbert[Gi]")
    op1=0.7957747151
    
    if(i2=="ampereturn[At]")
    op2=1
    else if(i2=="kiloampereturn[kAt]")
    op2=1000
    else if(i2=="milliampereturn[mAt]")
    op2=0.001
    else if(i2=="abampereturn[abAt]")
    op2=10
    else if(i2=="gilbert[Gi]")
    op2=0.7957747151
    document.getElementById("in2").value=(d*op1)/op2;
 
}