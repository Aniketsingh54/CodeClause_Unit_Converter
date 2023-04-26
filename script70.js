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

    if(i1=="farad[F]")
    op1=1
    else if(i1=="exafarad[EF]")
    op1=1.0E+18
    else if(i1=="petafarad[PF]")
    op1=1.0E+15
    else if(i1=="terafarad[TF]")
    op1=1000000000000
    else if(i1=="gigafarad[GF]")
    op1=1000000000
    else if(i1=="megafarad[MF]")
    op1=1000000
    else if(i1=="kilofarad[kF]")
    op1=1000
    else if(i1=="hectofarad[hF]")
    op1=100
    else if(i1=="dekafarad[daF]")
    op1=10
    else if(i1=="decifarad[dF]")
    op1=0.1
    else if(i1=="centifarad[cF]")
    op1=0.01
    else if(i1=="millifarad[mF]")
    op1=0.001
    else if(i1=="microfarad[µF]")
    op1=1.0E-6
    else if(i1=="nanofarad[nF]")
    op1=1.0E-9
    else if(i1=="picofarad[pF]")
    op1=1.0E-12
    else if(i1=="femtofarad[fF]")
    op1=1.0E-15 
    else if(i1=="attofarad[aF]")
    op1=1.0E-18
    

    
    if(i2=="farad[F]")
    op2=1
    else if(i2=="exafarad[EF]")
    op2=1.0E+18
    else if(i2=="petafarad[PF]")
    op2=1.0E+15
    else if(i2=="terafarad[TF]")
    op2=1000000000000
    else if(i2=="gigafarad[GF]")
    op2=1000000000
    else if(i2=="megafarad[MF]")
    op2=1000000
    else if(i2=="kilofarad[kF]")
    op2=1000
    else if(i2=="hectofarad[hF]")
    op2=100
    else if(i2=="dekafarad[daF]")
    op2=10
    else if(i2=="decifarad[dF]")
    op2=0.1
    else if(i2=="centifarad[cF]")
    op2=0.01
    else if(i2=="millifarad[mF]")
    op2=0.001
    else if(i2=="microfarad[µF]")
    op2=1.0E-6
    else if(i2=="nanofarad[nF]")
    op2=1.0E-9
    else if(i2=="picofarad[pF]")
    op2=1.0E-12
    else if(i2=="femtofarad[fF]")
    op2=1.0E-15 
    else if(i2=="attofarad[aF]")
    op2=1.0E-18
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}