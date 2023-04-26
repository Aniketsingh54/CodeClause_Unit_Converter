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

    if(i1=="dot/meter[dot/m]")
op1=1
else if(i1=="dot/millimeter[dot/mm]")
op1=1000
else if(i1=="dot/inch[dot/in]")
op1=39.3700787402
else if(i1=="pixel/inch[pixel/in]")
op1=39.3700787402


if(i2=="dot/meter[dot/m]")
op2=1
else if(i2=="dot/millimeter[dot/mm]")
op2=1000
else if(i2=="dot/inch[dot/in]")
op2=39.3700787402
else if(i2=="pixel/inch[pixel/in]")
op2=39.3700787402

    document.getElementById("in2").value=(d*op1)/op2;
 
}