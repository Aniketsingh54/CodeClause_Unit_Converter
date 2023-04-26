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
    
 if(i1=="squaremeter")
op1=1
else if(i1=="squarekilometer")
op1=1000000
else if(i1=="squarecentimeter")
op1= 0.0001
else if(i1=="squaremillimeter")
op1=1.0E-6
else if(i1=="squaremicrometer")
op1= 1.0E-12 
else if(i1=="hectare")
op1=10000 
else if(i1=="acre")
op1= 4046.8564224 
else if(i1=="squaremile")
op1=2589988.110336
else if(i1=="squareyard")
op1=0.83612736
else if(i1=="squarefoot")
op1=0.09290304
else if(i1=="squareinch")
op1= 0.00064516
else if(i1=="squarehectometer")
op1=10000 
else if(i1=="squaredekameter")
op1=100
else if(i1=="squaredecimeter")
op1= 0.01 
else if(i1=="squarenanometer")
op1= 1.0E-18

    
 if(i2=="squaremeter")
 op2=1
 else if(i2=="squarekilometer")
 op2=1000000
 else if(i2=="squarecentimeter")
 op2= 0.0001
 else if(i2=="squaremillimeter")
 op2=1.0E-6
 else if(i2=="squaremicrometer")
 op2= 1.0E-12 
 else if(i2=="hectare")
 op2=10000 
 else if(i2=="acre")
 op2= 4046.8564224 
 else if(i2=="squaremile")
 op2=2589988.110336
 else if(i2=="squareyard")
 op2=0.83612736
 else if(i2=="squarefoot")
 op2=0.09290304
 else if(i2=="squareinch")
 op2= 0.00064516
 else if(i2=="squarehectometer")
 op2=10000 
 else if(i2=="squaredekameter")
 op2=100
 else if(i2=="squaredecimeter")
 op2= 0.01 
 else if(i2=="squarenanometer")
 op2= 1.0E-18
    document.getElementById("in2").value=(d*op1)/op2;
 
}