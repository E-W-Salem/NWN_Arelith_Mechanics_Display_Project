let feat = '';
let bonusFeat = '';
let epicFeat = '';

function featTest (classLevel) {
  feat = ''
  bonusFeat = ''
  epicFeat = ''
  console.log(classLevel)

  if (TotalLevel.innerText == 1) {

    if (DropDownMenus.raceMenu.selectedIndex == 1){
      bonusFeat = "Bonus - Human"      
      featButtons(bonusFeat)
    }

    else {  
  
    }
  }

  switch(displayedClass){
      case Classes.Barbarian:
      console.log(classLevel);
      // pre-epic
      if (classLevel<21){
        
        switch(Number(classLevel)){
          case 1: feat = 'Barbarian Feat'; 
          featButtons(feat)
          ;break;
          case 2: bonusFeat = 'Uncanny Dodge'; break;
          case 4: bonusFeat = 'Rage 2/day'; break;
          case 5: bonusFeat = 'Uncanny Dodge 2'; break;
          case 8: bonusFeat = 'Rage 3/day'; break;
          case 10: bonusFeat = 'Uncanny Dodge 3'; break;
          case 11: bonusFeat = 'DR 1'; break;
          case 12: bonusFeat = 'Rage 3/day'; break;
          case 13: bonusFeat = 'Uncanny Dodge 4'; break;
          case 14: bonusFeat = 'DR 2'; break;
          case 15: bonusFeat = 'Rage 4/day'; break;
          case 16: bonusFeat = 'Uncanny Dodge 5'; epicFeat ='Rage 5/day';break;
          case 17: bonusFeat = 'DR 3'; break;
          case 19: bonusFeat = 'Uncanny Dodge 6'; break;
          case 20: bonusFeat = 'Greater Rage'; epicFeat ='DR 4';break;
          default: 
          console.log('barb, no feats')
        }
        
        if (classLevel %3 == 0){
          feat='Barbarian Feat'
          featButtons(feat)
        }

        else{

        }
      }

      // post-epic
      else if (classLevel>20&&classLevel<=30){
        if (classLevel %3 == 0 && classLevel == 24) {
          feat='Epic Barbarian Feat'
          featButtons(feat)
          epicFeat='Epic Barbarian Feat'
          featButtons(epicFeat)
        }

        else if(classLevel %3 == 0) {
          feat='Epic Barbarian Feat'
          featButtons(feat)
        }

        else if(classLevel == 23) {
          bonusFeat='Epic Barbarian DR'
        }

        else if(classLevel == 28) {
          feat='Epic Barbarian Feat'
          featButtons(feat)
        }

        else {

        }
      }
      break;
    
      case Classes.Bard:
        // pre-epic
        if (classLevel<21) {
          switch(Number(classLevel)) {
            case 1:
              feat = 'Bard Feat'
              break;
            default:
          }
          
          if (classLevel % 3 == 0){
            feat = 'Bard Feat'
          }

          else {

          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30) {
          if (classLevel %3 == 0) {
            feat='Epic Bard Feat'
          }

          else if ((classLevel-20) % 3 == 0) {
            epicFeat='Epic Bard Feat'
          }
        }
        break;
          
      case Classes.Cleric:
        // pre-epic
        if (classLevel<21) {
          switch(Number(classLevel)) {
            case 1:
              feat = 'Cleric Feat'
              featButtons(feat)
              bonusFeat = 'Turn Undead'
              epicFeat = 'Two Domains'
              break;
            default:
          }
          
          if (classLevel % 3 == 0){
            feat = 'Cleric Feat'
            featButtons(feat)
          }

          else {

          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30) {
          if (classLevel %3 == 0) {
            feat='Epic Cleric Feat'
            featButtons(feat)
          }

          else if ((classLevel-20) % 3 == 0) {
            epicFeat='Epic Cleric Feat'
            featButtons(epicFeat)
          }
        }
        break;
                    
      case Classes.Druid:
        // pre-epic
        if (classLevel<21){
          
          switch(Number(classLevel)){
            case 1: 
            feat = 'Druid Feat'
            featButtons(feat)
            bonusFeat = 'Animal Companion'
            break;
            case 2:
              bonusFeat = 'Woodland Stride'
              break;
            case 3:
              bonusFeat = 'Trackless Step'
              break;
            case 4:
              bonusFeat = "Resist Nature's Lure"
              break;
            case 5:
              bonusFeat = "Wild Shape"
              break;
            case 6:
              bonusFeat = "Wild Shape 2/day"
              break;
            case 7:
              bonusFeat = "Wild Shape 3/day"
              break;
            case 9:
              bonusFeat = "Venom Immunity"
              break;
            case 10:
              bonusFeat = "Wild Shape 4/day"
              break;
            case 14:
              bonusFeat = "Wild Shape 5/day"
              break;
            case 16:
              bonusFeat = "Elemental Shape"
              break;
            case 17:
              bonusFeat = "Elemental Shape 2/day"
              break;
            case 18:
              bonusFeat = "Wild Shape 6/day"
              break;
            case 19:
              bonusFeat = "Elemental Shape 3/day"
              break;
            case 20:
              bonusFeat = "Improved Elemental Shape"
              break;
              break;
            case 21:
              bonusFeat = "Infinite Wild Shape"
              break;
            case 26:
              bonusFeat = "Infinite Elemental Shape"
              break;
          }
          
          if (classLevel %3 == 0){
            feat='Druid Feat'
            featButtons(feat)
          }

          else{
          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30){
          if (classLevel %3 == 0 && classLevel == 24) {
            feat='Epic Druid Feat'
            featButtons(feat)
            epicFeat='Epic Druid Feat'
            featButtons(epicFeat)
          }

          else if(classLevel %3 == 0) {
            feat='Epic Druid Feat'
            featButtons(feat)            
          }

          else if(classLevel == 28) {
            epicFeat='Epic Druid Feat'
            featButtons(epicFeat)
          }

          else {
  
          }
        }
        break;
      
      case Classes.Fighter:
        if (classLevel <21) {
          if (classLevel %2 == 0){
            feat='Fighter Feat'
            featButtons(feat)
            bonusFeat=''
            epicFeat=''
          }

          else if (classLevel %2 != 0){
            feat=''
            bonusFeat=''
            epicFeat=''
          }
        }
        
        // post-epic
        else if (classLevel>20&&classLevel<=30) {
          if (classLevel %2 == 0){
            feat=''
            bonusFeat=''
            epicFeat='Epic Fighter Feat'
            featButtons(epicFeat)
          }
          else if (classLevel %2 != 0){
            feat=''
            bonusFeat=''
            epicFeat=''}}
          break;
  
      case Classes.Monk:
        // pre-epic
        if (classLevel<21){          
          switch(Number(classLevel)){
            case 1: 
            feat = 'Monk Feat'
            featButtons(feat)
            bonusFeat = '8 monk feats'
            break;
            case 2:
              bonusFeat = 'Deflect Arrows'
              epicFeat = 'Weapon Focus - Unarmed'
              break;
            case 3:
              bonusFeat = 'Still Mind'
              break;
            case 5:
              bonusFeat = "Purity of Body"
              break;
            case 6:
              bonusFeat = "Improved Knockdown"
              break;
            case 7:
              bonusFeat = "Wholeness of Body"
              break;
            case 9:
              bonusFeat = "Improved Evasion"
              break;
            case 10:
              bonusFeat = "Ki Strike +1"
              break;
            case 11:
              bonusFeat = "Diamond Body"
              break;
            case 12:
              bonusFeat = "Uncanny Dodge"
              break;
            case 13:
              bonusFeat = "Ki Strike +2"
              break;
            case 15:
              bonusFeat = "Quivering Palm"
              break;
            case 16:
              bonusFeat = "Ki Strike +3"
              break;
            case 18:
              bonusFeat = "Defensive Roll"
              epicFeat = "Empty Body"
              break;
            case 20:
              bonusFeat = "Perfect Self"
              break;
          }
          
          if (classLevel %3 == 0){
            feat='Monk Feat'
          }

          else{
          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30){
          if(classLevel == 30) {
            feat='Epic Monk Feat'
            featButtons(epicFeat)
            epicFeat='Epic Monk Feat'
            featButtons(epicFeat)
          }

          else if(classLevel %5 == 0) {
            epicFeat='Epic Monk Feat'
            featButtons(epicFeat)
          }

          else if (classLevel %3 == 0) {
            feat='Epic Monk Feat'
            featButtons(epicFeat)
          }

          else {

          }
        }
        break;

      case Classes.Paladin:
          // pre-epic
          if (classLevel<21){
            
            switch(Number(classLevel)){
              case 1: 
              feat = 'Paladin Feat'
              featButtons(feat)
              bonusFeat = 'Detect Evil / Lay on Hands'
              epicFeat = 'Divine Grace & Health'
              break;
              case 2:
                bonusFeat = 'Aura of Courage'
                epicFeat = 'Smite Evil'
                break;
              case 3:
                bonusFeat = 'Remove Disease'
                epicFeat = 'Turn Undead'
                break;
              case 5:
                bonusFeat = "Summon Mount"
                break;
            }
            
            if (classLevel %3 == 0){
              feat='Paladin Feat'
              featButtons(feat)

            }

            else{
            }
          }

          // post-epic
          else if (classLevel>20&&classLevel<=30){
            if(classLevel %3 == 0) {
              feat='Epic Paladin Feat'
              featButtons(feat)
            }

            else if((classLevel-20) % 3 == 0) {
              epicFeat='Epic Paladin Feat'
              featButtons(epicFeat)
            }

            else {
  
            }
          }
          break;

      case Classes.Ranger:
        // pre-epic
        if (classLevel<21){
          
          switch(Number(classLevel)){
            case 1: 
            feat = 'Ranger Feat + Bonus'
            featButtons(feat)
            featButtons(feat)

            epicFeat = "Track / Trackless Step / Dual Wield"
            break;
            case 6:
              bonusFeat = "Animal Companion"
              break;
            case 7:
              bonusFeat = "Woodland Stride"
              break;
            case 8:
              bonusFeat = "Uncanny Dodge"
              break;
            case 8:
              bonusFeat = "Evasion"
              epicFeat = "Improved Two Weapon Fighting"
              break;
          }
          
          if (classLevel %3 == 0 && classLevel %5 != 0) {
            feat='Ranger Feat'
            featButtons(feat)

          }
          else if (classLevel %5 == 0 && classLevel %3 != 0) {
            bonusFeat = 'Ranger Bonus'
            featButtons(bonusFeat)

          }
          else if (classLevel == 15) {
            feat='Ranger Feat'
            featButtons(feat)
            bonusFeat = 'Ranger Bonus'
            featButtons(bonusFeat)
          }

          else{

          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30){
          if(classLevel %3 == 0 && classLevel %5 != 0) {
            feat='Epic Ranger Feat'
            featButtons(feat)
          }

          else if((classLevel-20) % 3 == 0) {
            epicFeat='Epic Ranger Feat'
            featButtons(epicFeat)
          }

          else if(classLevel == 25) {
            feat = 'Epic Ranger Feat'
            featButtons(feat)            
            bonusFeat='Epic Ranger Bonus'
            featButtons(bonusFeat)
          }

          else if(classLevel == 30) {
            feat = 'Epic Ranger Feat'
            featButtons(feat)
            bonusFeat='Epic Ranger Bonus'
            featButtons(bonusFeat)
          }

          else {

          }
        }
        break;
        
      case Classes.Rogue:
        // pre-epic
        if (classLevel<21){
          
          switch(Number(classLevel)){
            case 1: 
            feat = 'Rogue Feat + Bonus'
            featButtons(feat)
            featButtons(feat)
            epicFeat = "Sneak Attack 1d6"
            break;
            case 2:
              bonusFeat = "Weapon Finesse"
              epicFeat = "Evasion"
              break;
            case 3:
              bonusFeat = "Sneak Attack 2d6"
              epicFeat = "Uncanny Dodge"
              break;
            case 4:
              bonusFeat = "Sneak Attack 3d6"
              break;
            case 6:
              bonusFeat = "Uncanny Dodge 2"
              break;
            case 7:
              bonusFeat = "Sneak Attack 4d6"
              break;
            case 9:
              bonusFeat = "Sneak Attack 5d6"
              break;
            case 10:
              bonusFeat = "Keen Sense"
              epicFeat = "Rogue Bonus"
              featButtons(epicFeat)
              break;
            case 11:
              bonusFeat = "Sneak Attack 6d6"
              epicFeat = "Uncanny Dodge 3"
              break;
            case 13:
              bonusFeat = "Sneak Attack 7d6"
              epicFeat = "Rogue Bonus"
              featButtons(epicFeat)
              break;
            case 14:
              bonusFeat = "Uncanny Dodge 4"
              break;
            case 15:
              bonusFeat = "Sneak Attack 8d6"
              break;
            case 16:
              bonusFeat = "Rogue Bonus"
              featButtons(epicFeat)
              break;
            case 17:
              bonusFeat = "Uncanny Dodge 5"
              epicFeat = "Sneak Attack 9d6"
              break;
            case 19:
              bonusFeat = "Sneak Attack 10d6"
              epicFeat = "Rogue Bonus"
              featButtons(epicFeat)
              break;
            case 20:
              bonusFeat = "Uncanny Dodge 6"
              break;
          }
          
          if (classLevel %3 == 0){
            feat='Rogue Feat'
            featButtons(feat)
          }

          else{

          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30){
          switch(Number(classLevel)){
            case 21:
              bonusFeat = "Sneak Attack 11d6"
              break;
            case 23:
              bonusFeat = "Sneak Attack 12d6"
              break;
            case 25:
              bonusFeat = "Sneak Attack 13d6"
              break;
            case 27:
              bonusFeat = "Sneak Attack 14d6"
              break;
            case 29:
              bonusFeat = "Sneak Attack 15d6"
              break;
          }

          if(classLevel %3 == 0 && classLevel !=24) {
            feat='Epic Rogue Feat'
            featButtons(feat)
          }

          else if(classLevel == 28) {
            epicFeat='Epic Rogue Bonus'
            featButtons(epicFeat)
          }

          else if(classLevel == 24) {
            feat = 'Epic Rogue Feat'
            featButtons(feat)
            bonusFeat='Epic Rogue Bonus'
            featButtons(bonusFeat)
          }

          else {

          }
        }
        break;

      case Classes.Sorcerer:
        // pre-epic
        if (classLevel<21) {
          switch(Number(classLevel)) {
            case 1:
              feat = 'Sorcerer Feat'
              featButtons(feat)
              break;
          }
          
          if (classLevel % 3 == 0){
            feat = 'Sorcerer Feat'
            featButtons(feat)
          }

          else {

          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30) {
          if (classLevel %3 == 0) {
            feat='Epic Sorcerer Feat'
            featButtons(feat)
          }
          else if ((classLevel-20) % 3 == 0) {
            epicFeat='Epic Sorcerer Feat'
            featButtons(epicFeat)
          }
        }
          break;

      case Classes.Wizard:

        // pre-epic
        if (classLevel<21) {
          switch(Number(classLevel)) {
            case 1:
              feat = 'Wizard Feat'
              featButtons(feat)
              break;
          }
          if (classLevel == 15) {
            feat = 'Wizard Feat'
            featButtons(feat)
            bonusFeat = 'Wizard Feat'
            featButtons(bonusFeat)

          }
          else if(classLevel % 3 == 0){
            feat = 'Wizard Feat'
            featButtons(feat)
          }
          else if(classLevel % 5 == 0){
            bonusFeat = 'Wizard Feat'
            featButtons(bonusFeat)
          }
        }

        // post-epic
        else if (classLevel>20&&classLevel<=30) {
          if (classLevel == 30) {
            bonusFeat = 'Epic Wizard Feat'
            featButtons(bonusFeat)
            feat='Epic Wizard Feat'
            featButtons(feat)
          }

          else if (classLevel %3 == 0) {
            feat='Epic Wizard Feat'
            featButtons(feat)
          }

          else if ((classLevel-20) % 3 == 0) {
            epicFeat='Epic Wizard Feat'
            featButtons(epicFeat)
          }

          else if (classLevel == 25) {
            bonusFeat = 'Epic Wizard Feat'
            featButtons(bonusFeat)
          }
        }
          break;        
  }

  featText(classLevel)

}

function featText(classLevel) {
  document.getElementById('Printout').innerHTML += `
  <h4 id="saveThisPage" class="lbl">${TotalLevel.innerText}</h4>
  <h4 id="saveThisPage" class="lbl">${displayedClass.NAME}</h4>
  <h4 id="saveThisPage" class="lbl">${classLevel}</h4>
  <h4 id="saveThisPage" class="lbl">${Toon.Final.BAB}</h4>
  <h4 id="saveThisPage" class="lbl">${Toon.Final.FORT}</h4>
  <h4 id="saveThisPage" class="lbl">${Toon.Final.REFL}</h4>
  <h4 id="saveThisPage" class="lbl">${Toon.Final.WILL}</h4>
  <h4 id="saveThisPage" class="lbl">${feat}</h4>
  <h4 id="saveThisPage" class="lbl">${bonusFeat}</h4>
  <h4 id="saveThisPage" class="lbl">${epicFeat}</h4>
  `;
}

function featButtons(why) {
  document.getElementById('FeatButtons').innerHTML+=
  `
  <select name="" id="" class="width100">
        <option selected value="">${why}</option>
       </select>
  `
}