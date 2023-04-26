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
    if(i1=="kilogram")
    op1=1
    else if(i1=="gram")
    op1=0.001
    else if(i1=="milligram")
    op1=1.0E-6
    else if(i1=="ton")
    op1=1000
    else if(i1=="pound")
    op1=0.45359237
    else if(i1=="ounce")
    op1=0.0283495231
    else if(i1=="carat")
    op1=0.0002
    else if(i1=="Atomicmassunit")
    op1=1.6605402E-27
    else if(i1=="exagram")
    op1=1.0E+15
    else if(i1=="petagram")
    op1=1000000000000
    else if(i1=="teragram")
    op1=1000000000
    else if(i1=="gigagram")
    op1=1000000
    else if(i1=="megagram")
    op1=1000
    else if(i1=="hectogram")
    op1=0.1
    else if(i1=="dekagram")
    op1= 0.01
    else if(i1=="decigram")
    op1=0.0001
    else if(i1=="centigram")
    op1=1.0E-5
    else if(i1=="microgram")
    op1=1.0E-9
    else if(i1=="nanogram")
    op1=1.0E-12
    else if(i1=="picogram")
    op1=1.0E-15
    else if(i1=="femtogram")
    op1=1.0E-18
    else if(i1=="attogram")
    op1=1.0E-21



        if(i2=="kilogram")
        op2=1
        else if(i2=="gram")
        op2=0.001
        else if(i2=="milligram")
        op2=1.0E-6
        else if(i2=="ton")
        op2=1000
        else if(i2=="pound")
        op2=0.45359237
        else if(i2=="ounce")
        op2=0.0283495231
        else if(i2=="carat")
        op2=0.0002
        else if(i2=="Atomicmassunit")
        op2=1.6605402E-27
        else if(i2=="exagram")
        op2=1.0E+15
        else if(i2=="petagram")
        op2=1000000000000
        else if(i2=="teragram")
        op2=1000000000
        else if(i2=="gigagram")
        op2=1000000
        else if(i2=="megagram")
        op2=1000
        else if(i2=="hectogram")
        op2=0.1
        else if(i2=="dekagram")
        op2= 0.01
        else if(i2=="decigram")
        op2=0.0001
        else if(i2=="centigram")
        op2=1.0E-5
        else if(i2=="microgram")
        op2=1.0E-9
        else if(i2=="nanogram")
        op2=1.0E-12
        else if(i2=="picogram")
        op2=1.0E-15
        else if(i2=="femtogram")
        op2=1.0E-18
        else if(i2=="attogram")
        op2=1.0E-21
    document.getElementById("in2").value=(d*op1)/op2;
 
}