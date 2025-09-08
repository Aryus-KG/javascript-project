class Character {
  constructor(name, rarity) {
    this.name = name;
    this.rarity = rarity;
  }
}

const pool = [
  new Character("Robin", 5),
  new Character("Cipher", 5),
  new Character("Hotaru", 5),
  new Character("Herta", 4),
  new Character("Kafka", 4),
  new Character("Castorice", 4),
  new Character("Marchy", 3),
  new Character("Topaz", 3),
  new Character("Asta", 3),
  new Character("Clara", 3),
  new Character("Bailu", 3),
];

function myBub() {
  const chance = Math.random() * 100;
  if (chance < 1) {
    return pool.filter((char) => char.rarity === 5)[
      Math.floor(Math.random() * 3)
    ];
  } else if (chance < 11) {
    return pool.filter((char) => char.rarity === 4)[
      Math.floor(Math.random() * 3)
    ];
  } else {
    return pool.filter((char) => char.rarity === 3)[
      Math.floor(Math.random() * 5)
    ];
  }
}
let inventory = [];

function showInventory() {
  inventory.forEach((character) => console.log(character));
}

function singlePull() {
  const result = myBub();
  inventory.push(result);
  console.log(`You got a ${result.rarity} Star Wife ${result.name} !`);
}

function multiPool(multi) {
  let i = 0;

  function pullNext() {
    if (i < multi) {
      singlePull();
      i++;
      setTimeout(pullNext, 700);
    } else {
      console.log(
        `Yey kamu telah berhasil melakukan Multi Pool Sebanyak ${i} kali!
nih istri istrimu BIT !`
      );
      showInventory();
    }
  }

  pullNext();
}
