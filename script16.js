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

    if(i1=="bit[b]")
op1=1
else if(i1=="nibble")
op1=4
else if(i1=="byte[B]")
op1=8
else if(i1=="character")
op1=8
else if(i1=="word")
op1=16
else if(i1=="MAPM-word")
op1=32
else if(i1=="quadruple-word")
op1=64
else if(i1=="block")
op1=4096
else if(i1=="kilobit[kb]")
op1=1024
else if(i1=="kilobyte[kB]")
op1=8192
else if(i1=="kilobyte(10^3bytes)")
op1=8000
else if(i1=="megabit[Mb]")
op1=1048576
else if(i1=="megabyte[MB]")
op1=8388608
else if(i1=="megabyte(10^6bytes)")
op1=8000000
else if(i1=="gigabit[Gb]")
op1=1073741824
else if(i1=="gigabyte[GB]")
op1=8589934592
else if(i1=="gigabyte(10^9bytes)")
op1=8000000000
else if(i1=="terabit[Tb]")
op1=1099511627776
else if(i1=="terabyte[TB]")
op1=8796093022208
else if(i1=="terabyte(10^12bytes)")
op1=8000000000000
else if(i1=="petabit[Pb]")
op1=1.1258999068426E+15
else if(i1=="petabyte[PB]")
op1=9.007199254741E+15
else if(i1=="petabyte(10^15bytes)")
op1=8.0E+15
else if(i1=="exabit[Eb]")
op1=1.1529215046068E+18
else if(i1=="exabyte[EB]")
op1= 9.2233720368548E+18
else if(i1=="exabyte(10^18bytes)")
op1= 8.0E+18



if(i2=="bit[b]")
op2=1
else if(i2=="nibble")
op2=4
else if(i2=="byte[B]")
op2=8
else if(i2=="character")
op2=8
else if(i2=="word")
op2=16
else if(i2=="MAPM-word")
op2=32
else if(i2=="quadruple-word")
op2=64
else if(i2=="block")
op2=4096
else if(i2=="kilobit[kb]")
op2=1024
else if(i2=="kilobyte[kB]")
op2=8192
else if(i2=="kilobyte(10^3bytes)")
op2=8000
else if(i2=="megabit[Mb]")
op2=1048576
else if(i2=="megabyte[MB]")
op2=8388608
else if(i2=="megabyte(10^6bytes)")
op2=8000000
else if(i2=="gigabit[Gb]")
op2=1073741824
else if(i2=="gigabyte[GB]")
op2=8589934592
else if(i2=="gigabyte(10^9bytes)")
op2=8000000000
else if(i2=="terabit[Tb]")
op2=1099511627776
else if(i2=="terabyte[TB]")
op2=8796093022208
else if(i2=="terabyte(10^12bytes)")
op2=8000000000000
else if(i2=="petabit[Pb]")
op2=1.1258999068426E+15
else if(i2=="petabyte[PB]")
op2=9.007199254741E+15
else if(i2=="petabyte(10^15bytes)")
op2=8.0E+15
else if(i2=="exabit[Eb]")
op2=1.1529215046068E+18
else if(i2=="exabyte[EB]")
op2= 9.2233720368548E+18
else if(i2=="exabyte(10^18bytes)")
op2= 8.0E+18

    document.getElementById("in2").value=(d*op1)/op2;
 
}