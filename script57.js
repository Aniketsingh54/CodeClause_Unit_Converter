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

    if(i1=="coulomb[C]")
    op1=1
    else if(i1=="megacoulomb[MC]")
    op1=1000000
    else if(i1=="kilocoulomb[kC]")
    op1=1000
    else if(i1=="millicoulomb[mC]")
    op1=0.001
    else if(i1=="microcoulomb[µC]")
    op1=1.0E-6
    else if(i1=="nanocoulomb[nC]")
    op1=1.0E-9
    else if(i1=="picocoulomb[pC]")
    op1=1.0E-12
    else if(i1=="abcoulomb[abC]")
    op1=10
    else if(i1=="EMUofcharge")
    op1=10
    else if(i1=="statcoulomb[stC]")
    op1=3.335640951982E-10 
    else if(i1=="ESUofcharge")
    op1=3.335640951982E-10
    else if(i1=="franklin[Fr]")
    op1=3.335640951982E-10
    else if(i1=="ampere-hour[A*h]")
    op1=3600
    else if(i1=="ampere-minute[A*min]")
    op1=60
    else if(i1=="ampere-second[A*s]")
    op1=1
    else if(i1=="faraday(basedoncarbon12)")
    op1=96485.309000004
    else if(i1=="Elementarycharge[e]")
    op1=1.60217733E-19
    
    if(i2=="coulomb[C]")
    op2=1
    else if(i2=="megacoulomb[MC]")
    op2=1000000
    else if(i2=="kilocoulomb[kC]")
    op2=1000
    else if(i2=="millicoulomb[mC]")
    op2=0.001
    else if(i2=="microcoulomb[µC]")
    op2=1.0E-6
    else if(i2=="nanocoulomb[nC]")
    op2=1.0E-9
    else if(i2=="picocoulomb[pC]")
    op2=1.0E-12
    else if(i2=="abcoulomb[abC]")
    op2=10
    else if(i2=="EMUofcharge")
    op2=10
    else if(i2=="statcoulomb[stC]")
    op2=3.335640951982E-10 
    else if(i2=="ESUofcharge")
    op2=3.335640951982E-10
    else if(i2=="franklin[Fr]")
    op2=3.335640951982E-10
    else if(i2=="ampere-hour[A*h]")
    op2=3600
    else if(i2=="ampere-minute[A*min]")
    op2=60
    else if(i2=="ampere-second[A*s]")
    op2=1
    else if(i2=="faraday(basedoncarbon12)")
    op2=96485.309000004
    else if(i2=="Elementarycharge[e]")
    op2=1.60217733E-19
    
    document.getElementById("in2").value=(d*op1)/op2;
 
}