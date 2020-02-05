export class OfficeWorker {
  constructor() {
    this.name = "Anon";
    this.IQ = 129;
    this.mana = 100;
    this.HP = 100;
  }

  swingBriefcase(enemy) {
    this.mana -= 5;
    enemy.HP -= 5;
  }

  magicBlast(enemy) {
    this.mana -= 10;
    enemy.HP -= 10;
  }
}

export class Coworker {
  constructor() {
    this.name = "Jeff";
    this.IQ = 115;
    this.mana = 100;
    this.HP = 80;
  }

  runAway() {
    this.mana -= 5;
    this.HP -= 5;
  }

  tackle(enemy) {
    this.mana -= 20;
    enemy.HP -= 10;
  }
}

export class Daughter {
  constructor() {
    this.name = "Ellie";
    this.IQ = 110;
    this.mana = 150;
    this.HP = 50;
  }

  pepperSpray(enemy) {
    this.mana -= 20;
    enemy.HP -= 100;
  }

  punch(enemy) {
    this.mana -= 20;
    enemy.HP -= 50;
  }
}

export class CrackHead {
  constructor() {
    this.name = "Crackhead";
    this.mana = 200;
    this.HP = 50;
  }
}

export class CrackQueen {
  constructor() {
    this.name = "Queen Cracktifa";
    this.mana = 500;
    this.HP = 100;
  }
}

// export const { name, IQ, mana, HP } = OfficeWorker;
