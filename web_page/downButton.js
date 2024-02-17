class CharacterSheet {
  constructor(
    totalLevel,
    displayedClass,
    class1,
    class2,
    class3,
    classLevel1,
    classLevel2,
    classLevel3,
    attributePoints,
    bonusPoints,
    skillPoints,
    alignment,
    race,
    attributeArray,
    skillValuesArray,
    printout
    ) 
    {
    this.totalLevel = totalLevel
    this.displayedClass = displayedClass
    this.class1 = class1
    this.class2 = class2
    this.class3 = class3
    this.classLevel1 = classLevel1
    this.classLevel2 = classLevel2
    this.classLevel3 = classLevel3
    this.attributePoints = attributePoints
    this.bonusPoints = bonusPoints
    this.skillPoints = skillPoints
    this.alignment = alignment
    this.race = race
    this.attributeArray = attributeArray
    this.skillValuesArray = skillValuesArray
    this.printout = printout
  }
}

function onLevelUpdate() {
  liveAttrValues = document.getElementsByClassName('attrValues')
  SkillValues = document.getElementsByClassName('SkillValues')

  currentAttrValues = []
  AV = Array.from(liveAttrValues)
  AV.forEach((boop)=>{currentAttrValues.push(boop.textContent)})

  currentSkillValues = []
  SV = Array.from(SkillValues)
  SV.forEach((boop)=>{currentSkillValues.push(boop.textContent)})

  bonusPoints = document.getElementById('BonusAttributePoints')
  attributePoints = document.getElementById('InitialAttributePoints')

  currentAttributePoints = []
  AP = Array.from(attributePoints)
  AP.forEach((boop)=>{currentAttributePoints.push(boop.textContent)})

  currentBonusPoints = []
  BP = Array.from(bonusPoints)
  BP.forEach((boop)=>{currentBonusPoints.push(boop.textContent)})

  switch (displayedClass) {
    case selectedClassOne.NAME: 
    currentClass = selectedClassOne
    break;

    case selectedClassTwo.NAME:
      currentClass = selectedClassTwo

    break;

    case selectedClassThree.NAME:
      currentClass = selectedClassThree
    break;

    default:
    break;
  }
  classOneIndex = DropDownMenus.classONE.selectedIndex
  classTwoIndex = DropDownMenus.classTWO.selectedIndex
  classThreeIndex = DropDownMenus.classTHREE.selectedIndex
  currentLevel = TotalLevel.textContent
  totalAttrPts = attributePoints.textContent
  totalBonusPts = bonusPoints.textContent
  totalSkillPts = SkillPointDisplay.textContent
  thisAlignment = characterAlignment.selectedIndex
  thisRace = Race.selectedIndex
  thisPage = Printout.innerHTML

  boop = new CharacterSheet(
    currentLevel,
    displayedClass,
    classOneIndex,
    classTwoIndex,
    classThreeIndex,
    ClassLevel1,
    ClassLevel2,
    ClassLevel3,
    totalAttrPts,
    totalBonusPts,
    totalSkillPts,
    thisAlignment,
    thisRace,
    currentAttrValues,
    currentSkillValues,
    thisPage
  )
  CharacterBook.push(boop)
  lastLevel=currentLevel-1

}

function delevel() {
  if (lastLevel>=0) {
    CharacterBook.pop()
    console.log(lastLevel)
    console
    //lastLevel = length(CharacterBook)
    TotalLevel.innerText = CharacterBook[lastLevel].totalLevel
    displayedClass = CharacterBook[lastLevel].displayedClass
    DropDownMenus.classONE.selectedIndex = CharacterBook[lastLevel].class1
    DropDownMenus.classTWO.selectedIndex = CharacterBook[lastLevel].class2
    DropDownMenus.classTHREE.selectedIndex = CharacterBook[lastLevel].class3
    CL1.innerText = +CharacterBook[lastLevel].classLevel1
    ClassLevel1 = CL1.innerText
    CL2.innerText = CharacterBook[lastLevel].classLevel2
    ClassLevel2 = CL2.innerText
    CL3.innerText = CharacterBook[lastLevel].classLevel3
    ClassLevel3 = CL3.innerText
    attributePoints.innerText = CharacterBook[lastLevel].attributePoints
    bonusPoints.innerText = CharacterBook[lastLevel].bonusPoints
    SkillPointDisplay.innerText = CharacterBook[lastLevel].skillPoints
    characterAlignment.selectedIndex = CharacterBook[lastLevel].alignment
    Race.selectedIndex = CharacterBook[lastLevel].race
    Printout.innerHTML = CharacterBook[lastLevel].printout
    paintTheThing(CharacterBook[lastLevel].attributeArray, liveAttrValues)
    paintTheThing(CharacterBook[lastLevel].skillValuesArray, SkillValues)
    lastLevel-=1
    attributeMods()
  }

}

function paintTheThing(thisIsAnArray, thisIsANodeList) {
  for (let index = 0; index < thisIsAnArray.length; index++) {
    thisIsANodeList[index].innerText = +thisIsAnArray[index];
    
  }
}

//let page1 = new CharacterSheet(    0,
//  'null',
//  'null',
//  'null',
// 'null',
//  0,
//  0,
//  0,
//  0,
//  0,
// 0,
//  'null',
//  'null',
//  'null',
//  'null',
//  'null')
//let CharacterBook = [page1];
let CharacterBook = [];
let lastLevel 
let currentAttributePoints = []
let AP = Array.from(attributePoints)
AP.forEach((boop)=>{currentAttributePoints.push(boop.textContent)})

currentBonusPoints = []
let BP = Array.from(bonusPoints)
BP.forEach((boop)=>{currentBonusPoints.push(boop.textContent)})

currentAttrValues = []
let AV = Array.from(liveAttrValues)
AV.forEach((boop)=>{currentAttrValues.push(boop.textContent)})

currentSkillValues = []
let SV = Array.from(SkillValues)
SV.forEach((boop)=>{currentSkillValues.push(boop.textContent)})