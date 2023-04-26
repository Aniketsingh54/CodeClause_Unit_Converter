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
 if(i1=="USD[UnitedStatesDollar]")
op1=1
else if(i1=="EUR[Euro]")
op1=1.1096500718
else if(i1=="AUD[AustralianDollar]")
op1=0.6691975719
else if(i1=="CAD[CanadianDollar]")
op1=0.7325476028
else if(i1=="CHF[SwissFranc]")
op1=1.1198672285
else if(i1=="CNY[ChineseYuan]")
op1=0.1450620866
else if(i1=="EUR[Euro]")
op1=1.1096500718
else if(i1=="GBP[BritishPoundSterling]")
op1=1.2434996058
else if(i1=="INR[IndianRupee]")
op1=0.0121890499
else if(i1=="JPY[JapaneseYen]")
op1=0.00745351
else if(i1=="MXN[MexicanPeso]")
op1=0.0555975626
else if(i1=="AED[UnitedArabEmiratesDirham]")
op1=0.2722718362
else if(i1=="AFN[AfghanAfghani]")
op1=0.0114942546
else if(i1=="ALL[AlbanianLek]")
op1=0.0097823429
else if(i1=="AMD[ArmenianDram]")
op1=0.002580845
else if(i1=="ANG[NetherlandsAntilleanGuilder]")
op1=0.555133654
else if(i1=="AOA[AngolanKwanza]")
op1=0.001975398
else if(i1=="ARS[ArgentinePeso]")
op1=0.0046221567
else if(i1=="AWG[ArubanFlorin]")
op1=0.5547850208
else if(i1=="AZN[AzerbaijaniManat]")
op1=0.5882352941
else if(i1=="BAM[Bosnia-HerzegovinaConvertibleMark]")
op1=0.5609264261
else if(i1=="BBD[BarbadianDollar]")
op1=0.5
else if(i1=="BDT[BangladeshiTaka]")
op1=0.0094249149
else if(i1=="BGN[BulgarianLev]")
op1=0.5610617533
else if(i1=="BHD[BahrainiDinar]")
op1=2.6534067089
else if(i1=="BIF[BurundianFranc]")
op1=0.000481232
else if(i1=="BMD[BermudanDollar]")
op1=1
else if(i1=="BND[BruneiDollar]")
op1=0.7494055341
else if(i1=="BOB[BolivianBoliviano]")
op1=0.1447881829
else if(i1=="BRL[BrazilianReal]")
op1=0.198035488
else if(i1=="BSD[BahamianDollar]")
op1=1
else if(i1=="BTC[Bitcoin]")
op1=27239.495088719
else if(i1=="BTN[BhutaneseNgultrum]")
op1=0.0121803672
else if(i1=="BWP[BotswananPula]")
op1=0.0761367889
else if(i1=="BYN[BelarusianRuble]")
op1=0.3963778988
else if(i1=="BZD[BelizeDollar]")
op1=0.4963599443
else if(i1=="CDF[CongoleseFranc]")
op1=0.0004885198
else if(i1=="CLF[ChileanUnitofAccount(UF)]")
op1=34.3748925785
else if(i1=="CLP[ChileanPeso]")
op1=0.0012457954
else if(i1=="CNH[ChineseYuan(Offshore)]")
op1=0.1450490411
else if(i1=="COP[ColombianPeso]")
op1=0.0002235774
else if(i1=="CRC[CostaRicanColón]")
op1=0.0018772325
else if(i1=="CUC[CubanConvertiblePeso]")
op1=1
else if(i1=="CUP[CubanPeso]")
op1=0.0388349515
else if(i1=="CVE[CapeVerdeanEscudo]")
op1=0.009913259
else if(i1=="CZK[CzechRepublicKoruna]")
op1=0.0467497253
else if(i1=="DJF[DjiboutianFranc]")
op1=0.0056234123
else if(i1=="DKK[DanishKrone]")
op1=0.1473991421
else if(i1=="DOP[DominicanPeso]")
op1=0.0183150183
else if(i1=="DZD[AlgerianDinar]")
op1=0.0073801419
else if(i1=="EGP[EgyptianPound]")
op1=0.0326554956
else if(i1=="ERN[EritreanNakfa]")
op1=0.0666666667
else if(i1=="ETB[EthiopianBirr]")
op1=0.0184911243
else if(i1=="FJD[FijianDollar]")
op1=0.4511820971
else if(i1=="FKP[FalklandIslandsPound]")
op1=1.2434996058
else if(i1=="GEL[GeorgianLari]")
op1=0.3992015968
else if(i1=="GGP[GuernseyPound]")
op1=1.2434996058
else if(i1=="GHS[GhanaianCedi]")
op1=0.085106383
else if(i1=="GIP[GibraltarPound]")
op1=1.2434996058
else if(i1=="GMD[GambianDalasi]")
op1=0.0160513644
else if(i1=="GNF[GuineanFranc]")
op1=0.0001164104
else if(i1=="GTQ[GuatemalanQuetzal]")
op1=0.1283555675
else if(i1=="GYD[GuyanaeseDollar]")
op1=0.0047305423
else if(i1=="HKD[HongKongDollar]")
op1=0.1273893464
else if(i1=="HNL[HonduranLempira]")
op1=0.0406091371
else if(i1=="HRK[CroatianKuna]")
op1=0.1458538136
else if(i1=="HTG[HaitianGourde]")
op1=0.0064339632
else if(i1=="HUF[HungarianForint]")
op1=0.0029235919
else if(i1=="IDR[IndonesianRupiah]")
op1=6.69523E-5 
else if(i1=="ILS[IsraeliNewSheqel]")
op1=0.2730438795
else if(i1=="IMP[Manxpound]")
op1=1.2434996058
else if(i1=="IQD[IraqiDinar]")
op1=0.0006849315
else if(i1=="IRR[IranianRial]")
op1= 2.36686E-5
else if(i1=="ISK[IcelandicKróna]")
op1=0.0073206442
else if(i1=="JEP[JerseyPound]")
op1=1.2434996058
else if(i1=="JMD[JamaicanDollar]")
op1=0.0065406013
else if(i1=="JOD[JordanianDinar]")
op1=1.4096419509
else if(i1=="KES[KenyanShilling]")
op1=0.0074553855
else if(i1=="KGS[KyrgystaniSom]")
op1=0.0114259598
else if(i1=="KHR[CambodianRiel]")
op1=0.0002461236
else if(i1=="KMF[ComorianFranc]")
op1=0.0022274187
else if(i1=="KPW[NorthKoreanWon]")
op1=0.0011111111
else if(i1=="KRW[SouthKoreanWon]")
op1=0.0007516706
else if(i1=="KWD[KuwaitiDinar]")
op1=3.2633986992
else if(i1=="KYD[CaymanIslandsDollar]")
op1=1.2005421648
else if(i1=="KZT[KazakhstaniTenge]")
op1=0.0021978485
else if(i1=="LAK[LaotianKip]")
op1= 5.80552E-5
else if(i1=="LBP[LebanesePound]")
op1=6.60066E-5 
else if(i1=="LKR[SriLankanRupee]")
op1=0.0030973773
else if(i1=="LRD[LiberianDollar]")
op1=0.006131208
else if(i1=="LSL[LesothoLoti]")
op1=0.0554323725
else if(i1=="LYD[LibyanDinar]")
op1=0.2098635887
else if(i1=="MAD[MoroccanDirham]")
op1=0.098760555
else if(i1=="MDL[MoldovanLeu]")
op1=0.0556147203
else if(i1=="MGA[MalagasyAriary]")
op1=0.0002267574
else if(i1=="MKD[MacedonianDenar]")
op1=0.0178065237
else if(i1=="MMK[MyanmaKyat]")
op1=0.0004764417
else if(i1=="MNT[MongolianTugrik]")
op1=0.0002841716
else if(i1=="MOP[MacanesePataca]")
op1=0.1237588075
else if(i1=="MRU[MauritanianOuguiya]")
op1=0.0291630213
else if(i1=="MUR[MauritianRupee]")
op1=0.0222222222
else if(i1=="MVR[MaldivianRufiyaa]")
op1=0.0651465798
else if(i1=="MWK[MalawianKwacha]")
op1=0.000973236
else if(i1=="MYR[MalaysianRinggit]")
op1=0.2253267237
else if(i1=="MZN[MozambicanMetical]")
op1=0.0156617069
else if(i1=="NAD[NamibianDollar]")
op1=0.0554323725
else if(i1=="NGN[NigerianNaira]")
op1=0.0021714112
else if(i1=="NIO[NicaraguanCórdoba]")
op1=0.0274122807
else if(i1=="NOK[NorwegiazKrone]")
op1=0.0944373921 
else if(i1=="NPR[NepaleseRupee]")
op1=0.0076126753
else if(i1=="NZD[NewZealandDollar]")
op1=0.6139998097
else if(i1=="OMR[OmaniRial]")
op1=2.5973756117
else if(i1=="PAB[PanamanianBalboa]")
op1=1
else if(i1=="PEN[PeruvianNuevoSol]")
op1=0.2658160553
else if(i1=="PGK[PapuaNewGuineanKina]")
op1=0.2840909091
else if(i1=="PHP[PhilippinePeso]")
op1=0.017898374
else if(i1=="PKR[PakistaniRupee]")
op1=0.0035273369
else if(i1=="PLN[PolishZloty]")
op1=0.2382163314
else if(i1=="PYG[ParaguayanGuarani]")
op1=0.0001404315
else if(i1=="QAR[QatariRial]")
op1=0.2746875429
else if(i1=="RON[RomanianLeu]")
op1=0.2225833018
else if(i1=="RSD[SerbianDinar]")
op1=0.009374544
else if(i1=="RUB[RussianRuble]")
op1=0.0122774717
else if(i1=="RWF[RwandanFranc]")
op1=0.0008984726
else if(i1=="SAR[SaudiRiyal]")
op1=0.2666251442
else if(i1=="SBD[SolomonIslandsDollar]")
op1=0.1204813326
else if(i1=="SCR[SeychelloisRupee]")
op1=0.0755216108
else if(i1=="SDG[SudanesePound]")
op1=0.0016666667
else if(i1=="SEK[SwedishKrona]")
op1=0.0971751193
else if(i1=="SGD[SingaporeDollar]")
op1=0.749007565
else if(i1=="SHP[SaintHelenaPound]")
op1=1.2434996058
else if(i1=="SLL[SierraLeoneanLeone]")
op1= 5.66091E-5
else if(i1=="SOS[SomaliShilling]")
op1=0.001759015
else if(i1=="SRD[SurinameseDollar]")
op1=0.0267318925
else if(i1=="SSP[SouthSudanesePound]")
op1=0.0076769538
else if(i1=="STD[SãoToméandPríncipeDobra(pre-2018)]")
op1=4.38135E-5
else if(i1=="STN[SãoToméandPríncipeDobra]")
op1=0.0440528634
else if(i1=="SVC[SalvadoranColón]")
op1=0.1143485472
else if(i1=="SYP[SyrianPound]")
op1=0.0003980052
else if(i1=="SZL[SwaziLilangeni]")
op1=0.0552063204
else if(i1=="THB[ThaiBaht]")
op1=0.029257151
else if(i1=="TJS[TajikistaniSomoni]")
op1=0.0916212966
else if(i1=="TMT[TurkmenistaniManat]")
op1=0.2857142857
else if(i1=="TND[TunisianDinar]")
op1=0.3194888179
else if(i1=="TOP[TonganPaanga]")
op1=0.4244211956
else if(i1=="TRY[TurkishLira]")
op1=0.0515421409
else if(i1=="TTD[TrinidadandTobagoDollar]")
op1=0.1474338041
else if(i1=="TWD[NewTaiwanDollar]")
op1=0.0326373953
else if(i1=="TZS[TanzanianShilling]")
op1=0.0004253509
else if(i1=="UAH[UkrainianHryvnia]")
op1=0.0270908538
else if(i1=="UGX[UgandanShilling]")
op1=0.000267511
else if(i1=="UYU[UruguayanPeso]")
op1=0.0256508828
else if(i1=="UZS[UzbekistanSom]")
op1=8.74508E-5


if(i2=="USD[UnitedStatesDollar]")
op2=1
else if(i2=="EUR[Euro]")
op2=1.1096500718
else if(i2=="AUD[AustralianDollar]")
op2=0.6691975719
else if(i2=="CAD[CanadianDollar]")
op2=0.7325476028
else if(i2=="CHF[SwissFranc]")
op2=1.1198672285
else if(i2=="CNY[ChineseYuan]")
op2=0.1450620866
else if(i2=="EUR[Euro]")
op2=1.1096500718
else if(i2=="GBP[BritishPoundSterling]")
op2=1.2434996058
else if(i2=="INR[IndianRupee]")
op2=0.0121890499
else if(i2=="JPY[JapaneseYen]")
op2=0.00745351
else if(i2=="MXN[MexicanPeso]")
op2=0.0555975626
else if(i2=="AED[UnitedArabEmiratesDirham]")
op2=0.2722718362
else if(i2=="AFN[AfghanAfghani]")
op2=0.0114942546
else if(i2=="ALL[AlbanianLek]")
op2=0.0097823429
else if(i2=="AMD[ArmenianDram]")
op2=0.002580845
else if(i2=="ANG[NetherlandsAntilleanGuilder]")
op2=0.555133654
else if(i2=="AOA[AngolanKwanza]")
op2=0.001975398
else if(i2=="ARS[ArgentinePeso]")
op2=0.0046221567
else if(i2=="AWG[ArubanFlorin]")
op2=0.5547850208
else if(i2=="AZN[AzerbaijaniManat]")
op2=0.5882352941
else if(i2=="BAM[Bosnia-HerzegovinaConvertibleMark]")
op2=0.5609264261
else if(i2=="BBD[BarbadianDollar]")
op2=0.5
else if(i2=="BDT[BangladeshiTaka]")
op2=0.0094249149
else if(i2=="BGN[BulgarianLev]")
op2=0.5610617533
else if(i2=="BHD[BahrainiDinar]")
op2=2.6534067089
else if(i2=="BIF[BurundianFranc]")
op2=0.000481232
else if(i2=="BMD[BermudanDollar]")
op2=1
else if(i2=="BND[BruneiDollar]")
op2=0.7494055341
else if(i2=="BOB[BolivianBoliviano]")
op2=0.1447881829
else if(i2=="BRL[BrazilianReal]")
op2=0.198035488
else if(i2=="BSD[BahamianDollar]")
op2=1
else if(i2=="BTC[Bitcoin]")
op2=27239.495088719
else if(i2=="BTN[BhutaneseNgultrum]")
op2=0.0121803672
else if(i2=="BWP[BotswananPula]")
op2=0.0761367889
else if(i2=="BYN[BelarusianRuble]")
op2=0.3963778988
else if(i2=="BZD[BelizeDollar]")
op2=0.4963599443
else if(i2=="CDF[CongoleseFranc]")
op2=0.0004885198
else if(i2=="CLF[ChileanUnitofAccount(UF)]")
op2=34.3748925785
else if(i2=="CLP[ChileanPeso]")
op2=0.0012457954
else if(i2=="CNH[ChineseYuan(Offshore)]")
op2=0.1450490411
else if(i2=="COP[ColombianPeso]")
op2=0.0002235774
else if(i2=="CRC[CostaRicanColón]")
op2=0.0018772325
else if(i2=="CUC[CubanConvertiblePeso]")
op2=1
else if(i2=="CUP[CubanPeso]")
op2=0.0388349515
else if(i2=="CVE[CapeVerdeanEscudo]")
op2=0.009913259
else if(i2=="CZK[CzechRepublicKoruna]")
op2=0.0467497253
else if(i2=="DJF[DjiboutianFranc]")
op2=0.0056234123
else if(i2=="DKK[DanishKrone]")
op2=0.1473991421
else if(i2=="DOP[DominicanPeso]")
op2=0.0183150183
else if(i2=="DZD[AlgerianDinar]")
op2=0.0073801419
else if(i2=="EGP[EgyptianPound]")
op2=0.0326554956
else if(i2=="ERN[EritreanNakfa]")
op2=0.0666666667
else if(i2=="ETB[EthiopianBirr]")
op2=0.0184911243
else if(i2=="FJD[FijianDollar]")
op2=0.4511820971
else if(i2=="FKP[FalklandIslandsPound]")
op2=1.2434996058
else if(i2=="GEL[GeorgianLari]")
op2=0.3992015968
else if(i2=="GGP[GuernseyPound]")
op2=1.2434996058
else if(i2=="GHS[GhanaianCedi]")
op2=0.085106383
else if(i2=="GIP[GibraltarPound]")
op2=1.2434996058
else if(i2=="GMD[GambianDalasi]")
op2=0.0160513644
else if(i2=="GNF[GuineanFranc]")
op2=0.0001164104
else if(i2=="GTQ[GuatemalanQuetzal]")
op2=0.1283555675
else if(i2=="GYD[GuyanaeseDollar]")
op2=0.0047305423
else if(i2=="HKD[HongKongDollar]")
op2=0.1273893464
else if(i2=="HNL[HonduranLempira]")
op2=0.0406091371
else if(i2=="HRK[CroatianKuna]")
op2=0.1458538136
else if(i2=="HTG[HaitianGourde]")
op2=0.0064339632
else if(i2=="HUF[HungarianForint]")
op2=0.0029235919
else if(i2=="IDR[IndonesianRupiah]")
op2=6.69523E-5 
else if(i2=="ILS[IsraeliNewSheqel]")
op2=0.2730438795
else if(i2=="IMP[Manxpound]")
op2=1.2434996058
else if(i2=="IQD[IraqiDinar]")
op2=0.0006849315
else if(i2=="IRR[IranianRial]")
op2= 2.36686E-5
else if(i2=="ISK[IcelandicKróna]")
op2=0.0073206442
else if(i2=="JEP[JerseyPound]")
op2=1.2434996058
else if(i2=="JMD[JamaicanDollar]")
op2=0.0065406013
else if(i2=="JOD[JordanianDinar]")
op2=1.4096419509
else if(i2=="KES[KenyanShilling]")
op2=0.0074553855
else if(i2=="KGS[KyrgystaniSom]")
op2=0.0114259598
else if(i2=="KHR[CambodianRiel]")
op2=0.0002461236
else if(i2=="KMF[ComorianFranc]")
op2=0.0022274187
else if(i2=="KPW[NorthKoreanWon]")
op2=0.0011111111
else if(i2=="KRW[SouthKoreanWon]")
op2=0.0007516706
else if(i2=="KWD[KuwaitiDinar]")
op2=3.2633986992
else if(i2=="KYD[CaymanIslandsDollar]")
op2=1.2005421648
else if(i2=="KZT[KazakhstaniTenge]")
op2=0.0021978485
else if(i2=="LAK[LaotianKip]")
op2= 5.80552E-5
else if(i2=="LBP[LebanesePound]")
op2=6.60066E-5 
else if(i2=="LKR[SriLankanRupee]")
op2=0.0030973773
else if(i2=="LRD[LiberianDollar]")
op2=0.006131208
else if(i2=="LSL[LesothoLoti]")
op2=0.0554323725
else if(i2=="LYD[LibyanDinar]")
op2=0.2098635887
else if(i2=="MAD[MoroccanDirham]")
op2=0.098760555
else if(i2=="MDL[MoldovanLeu]")
op2=0.0556147203
else if(i2=="MGA[MalagasyAriary]")
op2=0.0002267574
else if(i2=="MKD[MacedonianDenar]")
op2=0.0178065237
else if(i2=="MMK[MyanmaKyat]")
op2=0.0004764417
else if(i2=="MNT[MongolianTugrik]")
op2=0.0002841716
else if(i2=="MOP[MacanesePataca]")
op2=0.1237588075
else if(i2=="MRU[MauritanianOuguiya]")
op2=0.0291630213
else if(i2=="MUR[MauritianRupee]")
op2=0.0222222222
else if(i2=="MVR[MaldivianRufiyaa]")
op2=0.0651465798
else if(i2=="MWK[MalawianKwacha]")
op2=0.000973236
else if(i2=="MYR[MalaysianRinggit]")
op2=0.2253267237
else if(i2=="MZN[MozambicanMetical]")
op2=0.0156617069
else if(i2=="NAD[NamibianDollar]")
op2=0.0554323725
else if(i2=="NGN[NigerianNaira]")
op2=0.0021714112
else if(i2=="NIO[NicaraguanCórdoba]")
op2=0.0274122807
else if(i2=="NOK[NorwegiazKrone]")
op2=0.0944373921 
else if(i2=="NPR[NepaleseRupee]")
op2=0.0076126753
else if(i2=="NZD[NewZealandDollar]")
op2=0.6139998097
else if(i2=="OMR[OmaniRial]")
op2=2.5973756117
else if(i2=="PAB[PanamanianBalboa]")
op2=1
else if(i2=="PEN[PeruvianNuevoSol]")
op2=0.2658160553
else if(i2=="PGK[PapuaNewGuineanKina]")
op2=0.2840909091
else if(i2=="PHP[PhilippinePeso]")
op2=0.017898374
else if(i2=="PKR[PakistaniRupee]")
op2=0.0035273369
else if(i2=="PLN[PolishZloty]")
op2=0.2382163314
else if(i2=="PYG[ParaguayanGuarani]")
op2=0.0001404315
else if(i2=="QAR[QatariRial]")
op2=0.2746875429
else if(i2=="RON[RomanianLeu]")
op2=0.2225833018
else if(i2=="RSD[SerbianDinar]")
op2=0.009374544
else if(i2=="RUB[RussianRuble]")
op2=0.0122774717
else if(i2=="RWF[RwandanFranc]")
op2=0.0008984726
else if(i2=="SAR[SaudiRiyal]")
op2=0.2666251442
else if(i2=="SBD[SolomonIslandsDollar]")
op2=0.1204813326
else if(i2=="SCR[SeychelloisRupee]")
op2=0.0755216108
else if(i2=="SDG[SudanesePound]")
op2=0.0016666667
else if(i2=="SEK[SwedishKrona]")
op2=0.0971751193
else if(i2=="SGD[SingaporeDollar]")
op2=0.749007565
else if(i2=="SHP[SaintHelenaPound]")
op2=1.2434996058
else if(i2=="SLL[SierraLeoneanLeone]")
op2= 5.66091E-5
else if(i2=="SOS[SomaliShilling]")
op2=0.001759015
else if(i2=="SRD[SurinameseDollar]")
op2=0.0267318925
else if(i2=="SSP[SouthSudanesePound]")
op2=0.0076769538
else if(i2=="STD[SãoToméandPríncipeDobra(pre-2018)]")
op2=4.38135E-5
else if(i2=="STN[SãoToméandPríncipeDobra]")
op2=0.0440528634
else if(i2=="SVC[SalvadoranColón]")
op2=0.1143485472
else if(i2=="SYP[SyrianPound]")
op2=0.0003980052
else if(i2=="SZL[SwaziLilangeni]")
op2=0.0552063204
else if(i2=="THB[ThaiBaht]")
op2=0.029257151
else if(i2=="TJS[TajikistaniSomoni]")
op2=0.0916212966
else if(i2=="TMT[TurkmenistaniManat]")
op2=0.2857142857
else if(i2=="TND[TunisianDinar]")
op2=0.3194888179
else if(i2=="TOP[TonganPaanga]")
op2=0.4244211956
else if(i2=="TRY[TurkishLira]")
op2=0.0515421409
else if(i2=="TTD[TrinidadandTobagoDollar]")
op2=0.1474338041
else if(i2=="TWD[NewTaiwanDollar]")
op2=0.0326373953
else if(i2=="TZS[TanzanianShilling]")
op2=0.0004253509
else if(i2=="UAH[UkrainianHryvnia]")
op2=0.0270908538
else if(i2=="UGX[UgandanShilling]")
op2=0.000267511
else if(i2=="UYU[UruguayanPeso]")
op2=0.0256508828
else if(i2=="UZS[UzbekistanSom]")
op2=8.74508E-5

    document.getElementById("in2").value=(d*op1)/op2;
 
}