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
                    if(i1=="cubicmeter")
                    op1=1
                else if(i1=="cubickilometer")
                    op1=1000000000
                else if(i1=="cubiccentimeter")
                    op1=1.0E-6
                else if(i1=="cubicmillimeter")
                    op1=1.0E-9
                else if(i1=="liter")
                    op1=0.001
                else if(i1=="milliliter")
                    op1=1.0E-6
                else if(i1=="gallon")
                    op1=0.0037854118
                else if(i1=="quart")
                    op1=0.0009463529
                else if(i1=="pint")
                    op1=0.0004731765
                else if(i1=="cup")
                    op1=0.0002365882
                else if(i1=="tablespoon")
                    op1=1.47868E-5
                else if(i1=="teaspoon")
                    op1=4.92892159375E-6
                else if(i1=="cubicmile")
                    op1=4168181825.4406
                else if(i1=="cubicyard")
                    op1=0.764554858
                else if(i1=="cubicfoot")
                    op1=0.0283168466
                else if(i1=="cubicinch")
                    op1=1.63871E-5
                else if(i1=="cubicdecimeter")
                    op1=0.001
                else if(i1=="exaliter")
                    op1=1.0E+15 
                else if(i1=="petaliter")
                    op1=1000000000000 
                else if(i1=="teraliter")
                    op1=1000000000
                else if(i1=="gigaliter")
                    op1=1000000
                else if(i1=="megaliter")
                    op1=1000
                else if(i1=="kiloliter")
                    op1=1
                else if(i1=="hectoliter")
                    op1=0.1
                else if(i1=="dekaliter")
                    op1=0.01
                else if(i1=="deciliter")
                    op1=0.0001
                else if(i1=="centiliter")
                    op1=1.0E-5
                else if(i1=="microliter")
                    op1=1.0E-9
                else if(i1=="nanoliter")
                    op1= 1.0E-12
                else if(i1=="picoliter")
                    op1=1.0E-15 
                else if(i1=="femtoliter")
                    op1=1.0E-18
                else if(i1=="attoliter")
                    op1=1.0E-21
                else if(i1=="cc")
                    op1=1.0E-6
                else if (i1=="drop")
                    op1=5.0E-8



                    if(i2=="cubicmeter")
                    op2=1
                else if(i2=="cubickilometer")
                    op2=1000000000
                else if(i2=="cubiccentimeter")
                    op2=1.0E-6
                else if(i2=="cubicmillimeter")
                    op2=1.0E-9
                else if(i2=="liter")
                    op2=0.001
                else if(i2=="milliliter")
                    op2=1.0E-6
                else if(i2=="gallon")
                    op2=0.0037854118
                else if(i2=="quart")
                    op2=0.0009463529
                else if(i2=="pint")
                    op2=0.0004731765
                else if(i2=="cup")
                    op2=0.0002365882
                else if(i2=="tablespoon")
                    op2=1.47868E-5
                else if(i2=="teaspoon")
                    op2=4.92892159375E-6
                else if(i2=="cubicmile")
                    op2=4168181825.4406
                else if(i2=="cubicyard")
                    op2=0.764554858
                else if(i2=="cubicfoot")
                    op2=0.0283168466
                else if(i2=="cubicinch")
                    op2=1.63871E-5
                else if(i2=="cubicdecimeter")
                    op2=0.001
                else if(i2=="exaliter")
                    op2=1.0E+15 
                else if(i2=="petaliter")
                    op2=1000000000000 
                else if(i2=="teraliter")
                    op2=1000000000
                else if(i2=="gigaliter")
                    op2=1000000
                else if(i2=="megaliter")
                    op2=1000
                else if(i2=="kiloliter")
                    op2=1
                else if(i2=="hectoliter")
                    op2=0.1
                else if(i2=="dekaliter")
                    op2=0.01
                else if(i2=="deciliter")
                    op2=0.0001
                else if(i2=="centiliter")
                    op2=1.0E-5
                else if(i2=="microliter")
                    op2=1.0E-9
                else if(i2=="nanoliter")
                    op2= 1.0E-12
                else if(i2=="picoliter")
                    op2=1.0E-15 
                else if(i2=="femtoliter")
                    op2=1.0E-18
                else if(i2=="attoliter")
                    op2=1.0E-21
                else if(i2=="cc")
                    op2=1.0E-6
                else if (i2=="drop")
                    op2=5.0E-8

    document.getElementById("in2").value=(d*op1)/op2;
 
}