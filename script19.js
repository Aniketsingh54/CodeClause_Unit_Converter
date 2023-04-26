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

    if(i1=="radian/squaresecond")
op1=1
else if(i1=="radian/squareminute")
op1=0.0002777778
else if(i1=="revolution/squaresecond")
op1=6.2831853069
else if(i1=="revolution/minute/second")
op1=0.1047197551
else if(i1=="revolution/squareminute")
op1=0.0017453293



if(i2=="radian/squaresecond")
op2=1
else if(i2=="radian/squareminute")
op2=0.0002777778
else if(i2=="revolution/squaresecond")
op2=6.2831853069
else if(i2=="revolution/minute/second")
op2=0.1047197551
else if(i2=="revolution/squareminute")
op2=0.0017453293




    document.getElementById("in2").value=(d*op1)/op2;
 
}