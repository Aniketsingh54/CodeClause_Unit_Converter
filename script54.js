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

    if(i1=="becquerel[Bq]")
    op1=1
    else if(i1=="terabecquerel[TBq]")
    op1=1000000000000
    else if(i1=="gigabecquerel[GBq]")
    op1=1000000000
    else if(i1=="megabecquerel[MBq]")
    op1=1000000
    else if(i1=="kilobecquerel[kBq]")
    op1=1000
    else if(i1=="millibecquerel[mBq]")
    op1=0.001
    else if(i1=="curie[Ci]")
    op1=37000000000
    else if(i1=="kilocurie[kCi]")
    op1=37000000000000
    else if(i1=="millicurie[mCi]")
    op1=37000000
    else if(i1=="microcurie[µCi]")
    op1=37000
    else if(i1=="nanocurie[nCi]")
    op1=37
    else if(i1=="picocurie[pCi]")
    op1=0.037
    else if(i1=="rutherford")
    op1=1000000
    else if(i1=="one/second[1/s]")
    op1=1
    else if(i1=="disintegrations/second")
    op1=1
    else if(i1=="disintegrations/minute")
    op1=0.0166666667

    
    if(i2=="becquerel[Bq]")
    op2=1
    else if(i2=="terabecquerel[TBq]")
    op2=1000000000000
    else if(i2=="gigabecquerel[GBq]")
    op2=1000000000
    else if(i2=="megabecquerel[MBq]")
    op2=1000000
    else if(i2=="kilobecquerel[kBq]")
    op2=1000
    else if(i2=="millibecquerel[mBq]")
    op2=0.001
    else if(i2=="curie[Ci]")
    op2=37000000000
    else if(i2=="kilocurie[kCi]")
    op2=37000000000000
    else if(i2=="millicurie[mCi]")
    op2=37000000
    else if(i2=="microcurie[µCi]")
    op2=37000
    else if(i2=="nanocurie[nCi]")
    op2=37
    else if(i2=="picocurie[pCi]")
    op2=0.037
    else if(i2=="rutherford")
    op2=1000000
    else if(i2=="one/second[1/s]")
    op2=1
    else if(i2=="disintegrations/second")
    op2=1
    else if(i2=="disintegrations/minute")
    op2=0.0166666667

    document.getElementById("in2").value=(d*op1)/op2;
 
}