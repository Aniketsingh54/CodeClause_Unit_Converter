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

 if(i1=="hertz[Hz]")
op1=1
else if(i1=="exahertz[EHz]")
op1=1.0E+18
else if(i1=="petahertz[PHz]")
op1=1.0E+15
else if(i1=="terahertz[THz]")
op1=1000000000000
else if(i1=="gigahertz[GHz]")
op1=1000000000
else if(i1=="megahertz[MHz]")
op1=1000000
else if(i1=="kilohertz[kHz]")
op1=1000
else if(i1=="hectohertz[hHz]")
op1=100
else if(i1=="dekahertz[daHz]")
op1=10
else if(i1=="decihertz[dHz]")
op1=0.1
else if(i1=="centihertz[cHz]")
op1=0.01
else if(i1=="millihertz[mHz]")
op1=0.001
else if(i1=="microhertz[µHz]")
op1=1.0E-6
else if(i1=="nanohertz[nHz]")
op1=1.0E-9 
else if(i1=="picohertz[pHz]")
op1=1.0E-12
else if(i1=="femtohertz[fHz]")
op1=1.0E-15
else if(i1=="attohertz[aHz]")
op1=1.0E-18 
else if(i1=="cycle/second")
op1=1
else if(i1=="wavelengthInExametres")
op1=2.99792458E-10 
else if(i1=="wavelengthInPetametres")
op1=2.99792458E-7
else if(i1=="wavelengthInTerametres")
op1=0.0002997925
else if(i1=="wavelengthInGigametres")
op1=0.299792458
else if(i1=="wavelengthInMegametres")
op1=299.792458
else if(i1=="wavelengthInKilometres")
op1=299792.458
else if(i1=="wavelengthInHectometres")
op1=2997924.58
else if(i1=="wavelengthInDekametres")
op1=29979245.8
else if(i1=="wavelengthInMetres[m]")
op1=299792458
else if(i1=="wavelengthInDecimetres")
op1=2997924580
else if(i1=="wavelengthInCentimetres[cm]")
op1=29979245800
else if(i1=="wavelengthInMillimetres[mm]")
op1=299792458000
else if(i1=="wavelengthInMicrometres")
op1=2.99792458E+14

if(i2=="hertz[Hz]")
op2=1
else if(i2=="exahertz[EHz]")
op2=1.0E+18
else if(i2=="petahertz[PHz]")
op2=1.0E+15
else if(i2=="terahertz[THz]")
op2=1000000000000
else if(i2=="gigahertz[GHz]")
op2=1000000000
else if(i2=="megahertz[MHz]")
op2=1000000
else if(i2=="kilohertz[kHz]")
op2=1000
else if(i2=="hectohertz[hHz]")
op2=100
else if(i2=="dekahertz[daHz]")
op2=10
else if(i2=="decihertz[dHz]")
op2=0.1
else if(i2=="centihertz[cHz]")
op2=0.01
else if(i2=="millihertz[mHz]")
op2=0.001
else if(i2=="microhertz[µHz]")
op2=1.0E-6
else if(i2=="nanohertz[nHz]")
op2=1.0E-9 
else if(i2=="picohertz[pHz]")
op2=1.0E-12
else if(i2=="femtohertz[fHz]")
op2=1.0E-15
else if(i2=="attohertz[aHz]")
op2=1.0E-18 
else if(i2=="cycle/second")
op2=1
else if(i2=="wavelengthInExametres")
op2=2.99792458E-10 
else if(i2=="wavelengthInPetametres")
op2=2.99792458E-7
else if(i2=="wavelengthInTerametres")
op2=0.0002997925
else if(i2=="wavelengthInGigametres")
op2=0.299792458
else if(i2=="wavelengthInMegametres")
op2=299.792458
else if(i2=="wavelengthInKilometres")
op2=299792.458
else if(i2=="wavelengthInHectometres")
op2=2997924.58
else if(i2=="wavelengthInDekametres")
op2=29979245.8
else if(i2=="wavelengthInMetres[m]")
op2=299792458
else if(i2=="wavelengthInDecimetres")
op2=2997924580
else if(i2=="wavelengthInCentimetres[cm]")
op2=29979245800
else if(i2=="wavelengthInMillimetres[mm]")
op2=299792458000
else if(i2=="wavelengthInMicrometres")
op2=2.99792458E+14

    document.getElementById("in2").value=(d*op1)/op2;
 
}