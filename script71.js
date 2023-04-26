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


    if(i1=="henry[H]")
    op1=1
    else if(i1=="exahenry[EH]")
    op1=1.0E+18
    else if(i1=="petahenry[PH]")
    op1=1.0E+15
    else if(i1=="terahenry[TH]")
    op1=1000000000000
    else if(i1=="gigahenry[GH]")
    op1=1000000000
    else if(i1=="megahenry[MH]")
    op1=1000000
    else if(i1=="kilohenry[kH]")
    op1=1000
    else if(i1=="hectohenry[hH]")
    op1=100
    else if(i1=="dekahenry[daH]")
    op1=10
    else if(i1=="decihenry[dH]")
    op1=0.1
    else if(i1=="centihenry[cH]")
    op1=0.01
    else if(i1=="millihenry[mH]")
    op1=0.001
    else if(i1=="microhenry[µH]")
    op1=1.0E-6
    else if(i1=="nanohenry[nH]")
    op1=1.0E-9
    else if(i1=="picohenry[pH]")
    op1=1.0E-12
    else if(i1=="femtohenry[fH]")
    op1=1.0E-15 
    else if(i1=="attohenry[aH]")
    op1=1.0E-18
    

    
    if(i2=="henry[F]")
    op2=1
    else if(i2=="exahenry[EH]")
    op2=1.0E+18
    else if(i2=="petahenry[PH]")
    op2=1.0E+15
    else if(i2=="terahenry[TH]")
    op2=1000000000000
    else if(i2=="gigahenry[GH]")
    op2=1000000000
    else if(i2=="megahenry[MH]")
    op2=1000000
    else if(i2=="kilohenry[kH]")
    op2=1000
    else if(i2=="hectohenry[hH]")
    op2=100
    else if(i2=="dekahenry[daH]")
    op2=10
    else if(i2=="decihenry[dH]")
    op2=0.1
    else if(i2=="centihenry[cH]")
    op2=0.01
    else if(i2=="millihenry[mH]")
    op2=0.001
    else if(i2=="microhenry[µH]")
    op2=1.0E-6
    else if(i2=="nanohenry[nH]")
    op2=1.0E-9
    else if(i2=="picohenry[pH]")
    op2=1.0E-12
    else if(i2=="femtohenry[fH]")
    op2=1.0E-15 
    else if(i2=="attohenry[aH]")
    op2=1.0E-18
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}