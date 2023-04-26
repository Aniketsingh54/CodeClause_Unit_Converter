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

    if(i1=="ohmmeter")
    op1=1
    else if(i1=="ohmcentimeter")
    op1=0.01
    else if(i1=="ohminch")
    op1=0.0254
    else if(i1=="microhmcentimeter")
    op1=1.0E-8 
    else if(i1=="microhminch")
    op1=2.5400000000102E-8 
    else if(i1=="abohmcentimeter")
    op1=1.0E-11
    else if(i1=="statohmcentimeter")
    op1=8987524324.0156
    else if(i1=="circularmilohm/foot")
    op1=1.6624261130101E-9
    
    
    if(i2=="ohmmeter")
    op2=1
    else if(i2=="ohmcentimeter")
    op2=0.01
    else if(i2=="ohminch")
    op2=0.0254
    else if(i2=="microhmcentimeter")
    op2=1.0E-8 
    else if(i2=="microhminch")
    op2=2.5400000000102E-8 
    else if(i2=="abohmcentimeter")
    op2=1.0E-11
    else if(i2=="statohmcentimeter")
    op2=8987524324.0156
    else if(i2=="circularmilohm/foot")
    op2=1.6624261130101E-9
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}