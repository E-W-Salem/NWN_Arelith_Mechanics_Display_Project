// Functions that control the display changes on index.html. 
function attributeMods(){
  STRmod.innerText=modtable[Number(STR.innerText)]
  SkillMods[7].innerText = STRmod.innerText
  DEXmod.innerText=modtable[Number(DEX.innerText)]
  SkillMods[6].innerText = DEXmod.innerText
  SkillMods[9].innerText = DEXmod.innerText
  SkillMods[13].innerText = DEXmod.innerText
  SkillMods[15].innerText = DEXmod.innerText
  SkillMods[18].innerText = DEXmod.innerText
  SkillMods[19].innerText = DEXmod.innerText
  SkillMods[21].innerText = DEXmod.innerText
  SkillMods[25].innerText = DEXmod.innerText
  CONmod.innerText=modtable[Number(CON.innerText)]
  SkillMods[3].innerText = CONmod.innerText
  INTmod.innerText=modtable[Number(INT.innerText)]
  SkillMods[1].innerText = INTmod.innerText
  SkillMods[4].innerText = INTmod.innerText
  SkillMods[5].innerText = INTmod.innerText
  SkillMods[12].innerText = INTmod.innerText
  SkillMods[14].innerText = INTmod.innerText
  SkillMods[20].innerText = INTmod.innerText
  SkillMods[22].innerText = INTmod.innerText
  WISmod.innerText=modtable[Number(WIS.innerText)]
  SkillMods[8].innerText = WISmod.innerText
  SkillMods[11].innerText = WISmod.innerText
  SkillMods[23].innerText = WISmod.innerText
  CHAmod.innerText=modtable[Number(CHA.innerText)]
  SkillMods[0].innerText = CHAmod.innerText
  SkillMods[2].innerText = CHAmod.innerText
  SkillMods[10].innerText = CHAmod.innerText
  SkillMods[16].innerText = CHAmod.innerText
  SkillMods[17].innerText = CHAmod.innerText
  SkillMods[24].innerText = CHAmod.innerText
  SkillMods[26].innerText = CHAmod.innerText
}

function downSTR(){

  if (Number(attributePoints.innerText)+addsub[Number(STR.innerText)-1]>30) {
    
  }

  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(STR.innerText)]
    STR.innerText=Number(STR.innerText)-1
    statAnchor()
    
  }
  attributeMods()
}

function upSTR(){
  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      STR.innerText=Number(STR.innerText)+1
      }
    break;
    default:
      if (Number(STR.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+STR.innerText]<0) {}
      else {
        STR.innerText=Number(STR.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(STR.innerText)]
      }
    }
    attributeMods()
}

function downDEX(){
  console.log('DEX Down!')
  if (Number(attributePoints.innerText)+addsub[Number(DEX.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(DEX.innerText)]
    DEX.innerText=Number(DEX.innerText)-1
    statAnchor()
    
    
  }
  attributeMods()
}

function upDEX(){
  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      DEX.innerText=Number(DEX.innerText)+1
      }
    break;
    default:
      if (Number(DEX.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+DEX.innerText]<0) {}

      else {
        DEX.innerText=Number(DEX.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(DEX.innerText)]
      }
    }
    attributeMods()
}

function downCON(){
  console.log('CON Down!')
  if (Number(attributePoints.innerText)+addsub[Number(CON.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(CON.innerText)]
    CON.innerText=Number(CON.innerText)-1
    statAnchor()
    
  }
  attributeMods()
}

function upCON(){
  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      CON.innerText=Number(CON.innerText)+1
      }
    break;
    default:
      if (Number(CON.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+CON.innerText]<0) {}

      else {
        CON.innerText=Number(CON.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(CON.innerText)]
      }
    }
    attributeMods()
}

function downINT(){
  console.log('INT Down!')
  if (Number(attributePoints.innerText)+addsub[Number(INT.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(INT.innerText)]
    INT.innerText=Number(INT.innerText)-1
    statAnchor()
    
  }
  attributeMods()
}

function upINT(){
  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      INT.innerText=Number(INT.innerText)+1
      }
    break;
    default:
      if (Number(INT.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+INT.innerText]<0) {}

      else {
        INT.innerText=Number(INT.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(INT.innerText)]
      }
    }
    attributeMods()
}

function downWIS(){
  console.log('WIS Down!')
  if (Number(attributePoints.innerText)+addsub[Number(WIS.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(WIS.innerText)]
    WIS.innerText=Number(WIS.innerText)-1
    statAnchor()
    
  }
  attributeMods()
}

function upWIS(){
  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      WIS.innerText=Number(WIS.innerText)+1
      }
    break;
    default:
      if (Number(WIS.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+WIS.innerText]<0) {}

      else {
        WIS.innerText=Number(WIS.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(WIS.innerText)]
      }
    }
    attributeMods()
}

function downCHA(){
  console.log('CHA Down!')
  if (Number(attributePoints.innerText)+addsub[Number(CHA.innerText)-1]>30) {
  }
  else {
    attributePoints.innerText=Number(attributePoints.innerText)+addsub[Number(CHA.innerText)]
    CHA.innerText=Number(CHA.innerText)-1
    statAnchor()
    
  }
  attributeMods()
}

function upCHA(){

  switch(Number(attributePoints.innerText)) {
    case 0: 
    if (Number(bonusPoints.innerText > 0)) {
      bonusPoints.innerText=+Number(bonusPoints.innerText)-1
      CHA.innerText=Number(CHA.innerText)+1
      }
    break;
    default:
      if (Number(CHA.innerText)>=18) {
        
        console.log('nope')
      }
      else if (+attributePoints.innerText-addsub[+CHA.innerText]<0) {}

      else {
        CHA.innerText=Number(CHA.innerText)+1
        statAnchor()
        attributePoints.innerText=Number(attributePoints.innerText)-addsub[Number(CHA.innerText)]
      }
    }
    attributeMods()
}

function advancement(classLevel){

  skillPointCost()

  if (ClassLevel1+ClassLevel2+ClassLevel3<=30) {
    TotalLevel.innerText=ClassLevel1+ClassLevel2+ClassLevel3
    if (TotalLevel.innerText %4 == 0) {
      bonusPoints.innerText=Number(bonusPoints.innerText)+1
    }
  }

  else {

  }

  if (TotalLevel.innerText<=20){
    Toon.ClassOne.BAB=(selectedClassOne.BAB[ClassLevel1] + Number(STRmod.innerText));
    Toon.ClassOne.FORT=(selectedClassOne.FORT[ClassLevel1] + Number(CONmod.innerText));
    Toon.ClassOne.REFL=(selectedClassOne.REFL[ClassLevel1] + Number(DEXmod.innerText));
    Toon.ClassOne.WILL=selectedClassOne.WILL[ClassLevel1] + Number(WISmod.innerText);
  
    Toon.ClassTwo.BAB=selectedClassTwo.BAB[ClassLevel2];
    Toon.ClassTwo.FORT=selectedClassTwo.FORT[ClassLevel2];
    Toon.ClassTwo.REFL=selectedClassTwo.REFL[ClassLevel2];
    Toon.ClassTwo.WILL=selectedClassTwo.WILL[ClassLevel2];
  
    Toon.ClassThree.BAB=selectedClassThree.BAB[ClassLevel3];
    Toon.ClassThree.FORT=selectedClassThree.FORT[ClassLevel3];
    Toon.ClassThree.REFL=selectedClassThree.REFL[ClassLevel3];
    Toon.ClassThree.WILL=selectedClassThree.WILL[ClassLevel3];

    Toon.Final.BAB=Toon.ClassOne.BAB + Toon.ClassTwo.BAB + Toon.ClassThree.BAB;
    Toon.Final.FORT=Toon.ClassOne.FORT + Toon.ClassTwo.FORT + Toon.ClassThree.FORT;
    Toon.Final.REFL=Toon.ClassOne.REFL + Toon.ClassTwo.REFL + Toon.ClassThree.REFL;
    Toon.Final.WILL=Toon.ClassOne.WILL + Toon.ClassTwo.WILL + Toon.ClassThree.WILL;

    switch (displayedClass){
      case  selectedClassOne: featTest(CL1.innerText)

        break;
      case  selectedClassTwo: featTest(CL2.innerText)

      break;
      case  selectedClassThree: featTest(CL3.innerText)
      break;
    }
    }

  else if (TotalLevel.innerText>20 && TotalLevel.innerText<31) {
    Toon.Final.BAB=Toon.ClassOne.BAB + Toon.ClassTwo.BAB + Toon.ClassThree.BAB + Progression.epicBAB[TotalLevel.innerText-20],
    Toon.Final.FORT=Toon.ClassOne.FORT + Toon.ClassTwo.FORT + Toon.ClassThree.FORT + Progression.epicSAVES[TotalLevel.innerText-20],
    Toon.Final.REFL=Toon.ClassOne.REFL + Toon.ClassTwo.REFL + Toon.ClassThree.REFL + Progression.epicSAVES[TotalLevel.innerText-20],
    Toon.Final.WILL=Toon.ClassOne.WILL + Toon.ClassTwo.WILL + Toon.ClassThree.WILL + Progression.epicSAVES[TotalLevel.innerText-20]


    switch (displayedClass){
      case  selectedClassOne: featTest(CL1.innerText)

        break;
      case  selectedClassTwo: featTest(CL2.innerText)

      break;
      case  selectedClassThree: featTest(CL3.innerText)

        break;

      }

    }
  
}

function skillPointCalculation(points) {
  switch (Number(TotalLevel.innerText)) {
    case 1: SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+((points+Number(INTmod.innerText))*4);
    break;
    default: 
    if (points+Number(INTmod.innerText)<1) {
      SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+1
    }
    else {
      SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+points+Number(INTmod.innerText)
    }
  }
  switch(DropDownMenus.raceMenu.selectedIndex) {
    case 1: SkillPointDisplay.innerText = Number(SkillPointDisplay.innerText)+1
    break;
    default:
      break;
  } 
}

function CL1UP() {
  if (DropDownMenus.classONE.selectedIndex == 0) {
  }
  
  else {
    ClassLevel1=Number(CL1.innerText) + 1;
    Toon.ClassOne.Level=ClassLevel1
    displayedClass=selectedClassOne

    if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
      CL1.innerText=ClassLevel1;
      advancement(ClassLevel1)
      skillPointCalculation(selectedClassOne.SKILLValues.points)
    }

    onLevelUpdate()
  }

}

function CL2UP() {
  console.log('step-one')
  if (DropDownMenus.classTWO.selectedIndex == 0) {
    console.log('if')
  }

  else {
    console.log('else-start')
    ClassLevel2=Number(CL2.innerText) + 1;
    displayedClass=selectedClassTwo
    Toon.ClassTwo.Level=ClassLevel2
    if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
      console.log('else-if-start')
      console.log(ClassLevel1+ClassLevel2+ClassLevel3)
      CL2.innerText=ClassLevel2;
      console.log(ClassLevel2)
      console.log(lastLevel)
      advancement(ClassLevel2)
      skillPointCalculation(selectedClassTwo.SKILLValues.points)
      console.log('else-if-end')
    }
    console.log('else-end')
    onLevelUpdate()
    console.log('onLevelUpdate script')
  }
}

function CL3UP() {
  if (DropDownMenus.classTHREE.selectedIndex == 0) {
  }

  else {
    ClassLevel3=Number(CL3.innerText) + 1;
    displayedClass=selectedClassThree
    Toon.ClassThree.Level=ClassLevel3
    if (ClassLevel1+ClassLevel2+ClassLevel3<=30){
      CL3.innerText=ClassLevel3;
      advancement(ClassLevel3)
      skillPointCalculation(selectedClassThree.SKILLValues.points)
    }
    onLevelUpdate()
  }
}

function statAnchor(){
  currentStats.STR = Number(STR.innerText)
  currentStats.DEX = Number(DEX.innerText)
  currentStats.CON = Number(CON.innerText)
  currentStats.INT = Number(INT.innerText)
  currentStats.WIS = Number(WIS.innerText)
  currentStats.CHA = Number(CHA.innerText)
}

function racialTraits() {
  switch(DropDownMenus.raceMenu.selectedIndex){
    case 0://DEFAULT
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()
      
      attributeMods()
      break;
    case 1://HUMAN
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()
      attributeMods()
      break;
    case 2://DEEP IMASKARI
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX-2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA
      statAnchor()
      attributeMods()
      break;
    case 3://FIRBOLG
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4
      statAnchor()
      attributeMods()
      break;

    case 4://SHIELD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      attributeMods()
      break;

    case 5://GOLD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX-2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      attributeMods()
      break;

    case 6://DUERGAR
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()
      
      attributeMods()
      break;
    case 7://WILD DWARF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      
      attributeMods()
      break;
    case 8://MOON ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 9://SUN ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 10://WILD ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 11://WOOD ELF
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 12://DROW
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON-2
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()
      
      attributeMods()
      break;
    case 13://ROCK GNOME
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 14://SVIRFNEBLIN
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS+2
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()
      
      attributeMods()
      break;
    case 15://FOREST GNOME
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()

      break;
    case 16://LIGHTFOOT HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 17://GHOSTWISE HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 18://STRONGHEART HALFLING
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 19://FEY
      
      STR.innerText=Toon.defaultStats.STR-4
      DEX.innerText=Toon.defaultStats.DEX+4
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+4

      statAnchor()
      
      attributeMods()
      break;
    case 20://HALF ELF
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 21://HALF ORC
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      
      attributeMods()
      break;
    case 22://GOBLIN
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 23://KOBOLD
      
      STR.innerText=Toon.defaultStats.STR-2
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 24://GNOLL
      
      STR.innerText=Toon.defaultStats.STR+2
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT-2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      
      attributeMods()
      break;
    case 25://OROG
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()
      
      attributeMods()
      break;
    case 26://HOBGOBLIN
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 27://OGRE
      
      STR.innerText=Toon.defaultStats.STR+6
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT-4
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA-4

      statAnchor()
      
      attributeMods()
      break;
    case 28://MINOTAUR
      
      STR.innerText=Toon.defaultStats.STR+4
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA-2

      statAnchor()
      
      attributeMods()
      break;
    case 29://IMP
      
      STR.innerText=Toon.defaultStats.STR-4
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+4

      statAnchor()
      
      attributeMods()
      break;
    case 30://TROGLODYTE
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()
      
      attributeMods()
      break;
    case 31://YUAN-TI
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT+2
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()
      
      attributeMods()
      break;
    case 32://DERRO
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON+2
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS-2
      CHA.innerText=Toon.defaultStats.CHA

      statAnchor()
      
      attributeMods()
      break;
    case 33://RAKSHASA
      
      STR.innerText=Toon.defaultStats.STR
      DEX.innerText=Toon.defaultStats.DEX+2
      CON.innerText=Toon.defaultStats.CON
      INT.innerText=Toon.defaultStats.INT
      WIS.innerText=Toon.defaultStats.WIS
      CHA.innerText=Toon.defaultStats.CHA+2

      statAnchor()
      
      attributeMods()
      break;
    
    default: 
      console.log('hello');
      break;
  }
}

function classesFromAlignment(){
  switch(DropDownMenus.alignmentMenu.selectedIndex){
    case 0://DEFAULT
      
      break;
    case 1://LG 
      
      break;
    case 2://NG
    
      break;
    case 3://CG
      
      break;
    case 4://LN
      
      break;
    case 5://TN
      
      break;
    case 6://CN
      
      break;
    case 7://LE
      
      break;
    case 8://NE
      
      break;
    case 9://CE
      
      break;
    default: 
    console.log('hello');
    break;
  } 
}

function skillPointCost() {
  let i;
  for (i=0;i<27;i++){
    if (displayedClass.SKILLValues.preferred[i]==0){
      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostProhibited"
    }
    else if (displayedClass.SKILLValues.preferred[i]==1){
      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostOne"
    }
    else if (displayedClass.SKILLValues.preferred[i]==2){
      SkillButtons[i].className="btn ";
      SkillButtons[i].className+="skillCostTwo"
    }
  }
}

function classOneSelection(){
  switch(DropDownMenus.classONE.selectedIndex){
    case 0://DEFAULT
      selectedClassOne=Classes.Null
      displayedClass=selectedClassOne

      break;

    case 1://

      selectedClassOne=Classes.Barbarian
      
      displayedClass=selectedClassOne
      break;

    case 2://

      selectedClassOne=Classes.Bard
      displayedClass=selectedClassOne

      break;

    case 3://

      selectedClassOne=Classes.Cleric
      displayedClass=selectedClassOne

      break;

    case 4://

      selectedClassOne=Classes.Druid
      displayedClass=selectedClassOne

      break;

    case 5://

      selectedClassOne=Classes.Fighter
      displayedClass=selectedClassOne

      break;

    case 6://

      selectedClassOne=Classes.Monk
      displayedClass=selectedClassOne

      break;

    case 7://

      selectedClassOne=Classes.Paladin
      displayedClass=selectedClassOne

      break;

    case 8://

      selectedClassOne=Classes.Ranger
      displayedClass=selectedClassOne

      break;

    case 9://

      selectedClassOne=Classes.Rogue
      displayedClass=selectedClassOne

      break;

    case 10://
      selectedClassOne=Classes.Sorcerer
      displayedClass=selectedClassOne

      break;

    case 11://

      selectedClassOne=Classes.Wizard
      displayedClass=selectedClassOne

      break;

  } 
}

function classTwoSelection(){
  switch(DropDownMenus.classTWO.selectedIndex){
    case 0://DEFAULT
    selectedClassTwo=Classes.Null
    displayedClass=selectedClassTwo


      
      break;
    case 1://

      selectedClassTwo=Classes.Barbarian
      displayedClass=selectedClassTwo

      break;

    case 2://NG
      selectedClassTwo=Classes.Bard
      displayedClass=selectedClassTwo

    break;

    case 3://CG
      selectedClassTwo=Classes.Cleric
      displayedClass=selectedClassTwo

    break;

    case 4://LN
      selectedClassTwo=Classes.Druid
      displayedClass=selectedClassTwo

    break;

    case 5://TN
      selectedClassTwo=Classes.Fighter
      displayedClass=selectedClassTwo

    break;

    case 6://
      selectedClassTwo=Classes.Monk
      displayedClass=selectedClassTwo

    break;

    case 7://
      selectedClassTwo=Classes.Paladin
      displayedClass=selectedClassTwo

    break;

    case 8://
      selectedClassTwo=Classes.Ranger
      displayedClass=selectedClassTwo

    break;

    case 9://
      selectedClassTwo=Classes.Rogue
      displayedClass=selectedClassTwo

    break;

    case 10://
      selectedClassTwo=Classes.Sorcerer
      displayedClass=selectedClassTwo

    break;

    case 11://
      selectedClassTwo=Classes.Wizard
      displayedClass=selectedClassTwo

    break;

  } 
}

function classThreeSelection(){
  switch(DropDownMenus.classTHREE.selectedIndex){
    case 0://DEFAULT
      selectedClassThree=Classes.Null
      displayedClass=selectedClassThree

      break;

    case 1://
        selectedClassThree=Classes.Barbarian
        displayedClass=selectedClassThree

      break;

    case 2://
        selectedClassThree=Classes.Bard
        displayedClass=selectedClassThree

      break;

    case 3://
        selectedClassThree=Classes.Cleric
        displayedClass=selectedClassThree

      break;

    case 4://
        selectedClassThree=Classes.Druid
        displayedClass=selectedClassThree


      break;
    case 5://
        selectedClassThree=Classes.Fighter
        displayedClass=selectedClassThree

      break;

    case 6://
        selectedClassThree=Classes.Monk
        displayedClass=selectedClassThree

      break;

    case 7://
        selectedClassThree=Classes.Paladin
        displayedClass=selectedClassThree

      break;

    case 8://
        selectedClassThree=Classes.Ranger
        displayedClass=selectedClassThree

      break;

    case 9://
        selectedClassThree=Classes.Rogue
        displayedClass=selectedClassThree

      break;

    case 10://
        selectedClassThree=Classes.Sorcerer
        displayedClass=selectedClassThree

      break;

    case 11://
        selectedClassThree=Classes.Wizard
        displayedClass=selectedClassThree

      break;

  } 
}

function giftSTR(){

  switch(STRgift.selectedIndex){
    case 0: 
      STR.innerText=currentStats.STR
      attributeMods()

      break;
    case 1:
      STR.innerText=currentStats.STR +2;
      attributeMods()
      break;
  }
}

function giftDEX(){

  switch(DEXgift.selectedIndex){
    case 0: 
      DEX.innerText=currentStats.DEX
      attributeMods()

      break;
    case 1:
      DEX.innerText=currentStats.DEX +2;
      attributeMods()
      break;
  }
}

function giftCON(){

  switch(CONgift.selectedIndex){
    case 0: 
      CON.innerText=currentStats.CON
      attributeMods()

      break;
    case 1:
      CON.innerText=currentStats.CON +2;
      attributeMods()
      break;
  }
}

function giftINT(){

  switch(INTgift.selectedIndex){
    case 0: 
    INT.innerText=currentStats.INT
    attributeMods()
      break;
    case 1:
      INT.innerText=currentStats.INT +2;
      attributeMods()
      break;
  }
}

function giftWIS(){

  switch(WISgift.selectedIndex){
    case 0: 
    WIS.innerText=currentStats.WIS
    attributeMods()
      break;
    case 1:
      WIS.innerText=currentStats.WIS +2;
      attributeMods()
      break;
  }
}

function giftCHA(){

  switch(CHAgift.selectedIndex){
    case 0: 
      CHA.innerText=currentStats.CHA
      attributeMods()

      break;
    case 1:
      CHA.innerText=currentStats.CHA +2;
      attributeMods()
      break;
  }
}

function skillPointAllocation(pointer){
  if ((Number(SkillPointDisplay.innerText))==0) {
  }

  switch (displayedClass.SKILLValues.preferred[pointer]) {
    case 0:
      SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-0
      SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+0
      break;

    case 1:
      if ((Number(SkillPointDisplay.innerText))-1>=0) {

        SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-1
        SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+1
      }
      break;

    case 2: 
    if ((Number(SkillPointDisplay.innerText))-2>=0) {
      SkillPointDisplay.innerText=Number(SkillPointDisplay.innerText)-2
      SkillValues[pointer].textContent=Number(SkillValues[pointer].textContent)+1
    }
      break;

  }
}
function reset() {
  for (let index = 0; index < resetable.length; index++) {
    console.log(resetable[index].selectedIndex)
    resetable[index].selectedIndex = 0;
    
  }
  location.reload()
  return false
}

