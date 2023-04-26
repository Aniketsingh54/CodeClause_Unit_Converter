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

     if(i1=="kilogramsquaremeter")
op1=1
else if(i1=="kilogramsquarecentimeter")
op1=0.0001
else if(i1=="kilogramsquaremillimeter")
op1=1.0E-6
else if(i1=="gramsquarecentimeter")
op1=1.0E-7
else if(i1=="gramsquaremillimeter")
op1=1.0E-9
else if(i1=="kilogram-forcemetersquaresecond")
op1=9.8066499998
else if(i1=="kilogram-forcecentimetersquaresecond")
op1=0.0980665
else if(i1=="ouncesquareinch[oz*in^2]")
op1=1.829E-5
else if(i1=="ounce-forceinchsq.second")
op1=0.0070615519



if(i2=="kilogramsquaremeter")
op2=1
else if(i2=="kilogramsquarecentimeter")
op2=0.0001
else if(i2=="kilogramsquaremillimeter")
op2=1.0E-6
else if(i2=="gramsquarecentimeter")
op2=1.0E-7
else if(i2=="gramsquaremillimeter")
op2=1.0E-9
else if(i2=="kilogram-forcemetersquaresecond")
op2=9.8066499998
else if(i2=="kilogram-forcecentimetersquaresecond")
op2=0.0980665
else if(i2=="ouncesquareinch[oz*in^2]")
op2=1.829E-5
else if(i2=="ounce-forceinchsq.second")
op2=0.0070615519


    document.getElementById("in2").value=(d*op1)/op2;
 
}