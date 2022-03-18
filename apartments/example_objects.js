const laptop = {
    price: 1000,
    brand: 'HP',
    memory: '2',
    color: 'pink'
}

const car = {
    engine: 'V8',
    doors: 2,
    model: 'BMW',
    price: 200000,
    make: 'M4'
}

const company = {
    name: 'Vittles',
    ceo: 'Michael Law',
    isTheBest: true,
    publiclyTraded: false
}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false,
    pets: false
}

const item = {
    name: 'Excalibur',
    attackPower: 130,
}

const ally = {
    name: 'Geralt',
    power: { name: 'Kamehameha', attackPower: 9000 }
}

const character={
    hairColor: 'blue',
    height: "6'7",
    race: 'Elf',
    gender: null,
    strength: Infinity,
    dlc: false,
    class: 'Mage',
    cohort: '031422',
    item: item,
    ally: ally
}

//2 ways to declare new keys. latter is good for switching to other programs
character.ally.power.clothesColor = 'yellow'
character.ally.power['manaCost'] = 50

console.log(character)
console.log(character.item.name)
console.log(character.ally.power.attackPower)