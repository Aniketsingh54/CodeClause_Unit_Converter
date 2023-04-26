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

    if(i1=="mol/second[mol/s]")
    op1=1
    else if(i1=="examol/second[Emol/s]")
    op1= 1.0E+18
    else if(i1=="petamol/second[Pmol/s]")
    op1=1.0E+15
    else if(i1=="teramol/second[Tmol/s]")
    op1=1000000000000
    else if(i1=="gigamol/second[Gmol/s]")
    op1=1000000000
    else if(i1=="megamol/second[Mmol/s]")
    op1=1000000
    else if(i1=="kilomol/second[kmol/s]")
    op1=1000
    else if(i1=="hectomol/second[hmol/s]")
    op1=100
    else if(i1=="dekamol/second[damol/s]")
    op1=10
    else if(i1=="decimol/second[dmol/s]")
    op1=0.1
    else if(i1=="centimol/second[cmol/s]")
    op1=0.01
    else if(i1=="millimol/second[mmol/s]")
    op1=0.001
    else if(i1=="micromol/second[µmol/s]")
    op1=1.0E-6
    else if(i1=="nanomol/second[nmol/s]")
    op1=1.0E-9
    else if(i1=="picomol/second[pmol/s]")
    op1=1.0E-12
    else if(i1=="femtomol/second[fmol/s]")
    op1=1.0E-15
    else if(i1=="attomol/second[amol/s]")
    op1=1.0E-18
    
    if(i2=="mol/second[mol/s]")
    op2=1
    else if(i2=="examol/second[Emol/s]")
    op2= 1.0E+18
    else if(i2=="petamol/second[Pmol/s]")
    op2=1.0E+15
    else if(i2=="teramol/second[Tmol/s]")
    op2=1000000000000
    else if(i2=="gigamol/second[Gmol/s]")
    op2=1000000000
    else if(i2=="megamol/second[Mmol/s]")
    op2=1000000
    else if(i2=="kilomol/second[kmol/s]")
    op2=1000
    else if(i2=="hectomol/second[hmol/s]")
    op2=100
    else if(i2=="dekamol/second[damol/s]")
    op2=10
    else if(i2=="decimol/second[dmol/s]")
    op2=0.1
    else if(i2=="centimol/second[cmol/s]")
    op2=0.01
    else if(i2=="millimol/second[mmol/s]")
    op2=0.001
    else if(i2=="micromol/second[µmol/s]")
    op2=1.0E-6
    else if(i2=="nanomol/second[nmol/s]")
    op2=1.0E-9
    else if(i2=="picomol/second[pmol/s]")
    op2=1.0E-12
    else if(i2=="femtomol/second[fmol/s]")
    op2=1.0E-15
    else if(i2=="attomol/second[amol/s]")
    op2=1.0E-18
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}