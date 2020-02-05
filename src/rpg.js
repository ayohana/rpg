export class Player {
  constructor() {
    this.char;
    this.level = 1;
  }

  assignCharacter(userInput) {
    if (userInput === "OfficeWorker") {
      return this.char = new OfficeWorker();
    } else if (userInput === "Coworker") {
      return this.char = new Coworker();
    } else {
      return this.char = new Daughter();
    }
  }

  take(item) {
    if (item === "The God Delusion") {
      this.char.IQ += 1;
    } else if (item === "Gone With The Wind") {
      this.char.IQ += 3;
    } else if (item === "Arabian Nights") {
      this.char.IQ += 10;
    } else if (item === "book") {
      this.char.IQ += 5;
    }
  }

  levelUp() {
    if (this.char.IQ >= 133) {
      this.level = 2;
    } else if (this.char.IQ >= 150) {
      this.level = 3;
    } else if (this.char.IQ >= 160) {
      this.level = 4;
    }
  }
}

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

  spit(player) {
    this.mana -= 5;
    player.HP -= 5;
  }
}

export class CrackQueen {
  constructor() {
    this.name = "Queen Cracktifa";
    this.mana = 500;
    this.HP = 100;
  }

  syringeStab(player) {
    this.mana -= 10;
    player.HP -= 10;
  }

  narcan() {
    this.mana -= 20;
    this.HP += 20;
  }
}

export class Board {
  constructor() {
    this.space1 = new Space(1, 1);
    this.space2 = new Space(1, 2);
    this.space3 = new Space(1, 3);
    this.space4 = new Space(2, 1);
    this.space5 = new Space(2, 2);
    this.space6 = new Space(2, 3);
    this.space7 = new Space(3, 1);
    this.space8 = new Space(3, 2);
    this.space9 = new Space(3, 3);
  }

  findCurrentSpace(x, y) {
    for (let i = 1; i <= 9; i++){
      if (this[`space${i}`].xCoordinate === x && this[`space${i}`].yCoordinate === y) {
        return this[`space${i}`];
      }
    }
  }
}

export class Space {
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  moveNorth() {
    if (this.xCoordinate > 0) {
      this.xCoordinate -= 1;
    }
  }
}

export class Game {
  constructor() {
    this.board = new Board();
    this.currentSpace = this.board.space5;
  }

  assignMove(moveInput) {
    if (moveInput === "North") {
      this.currentSpace.moveNorth();
    }
  }
}

// export const { name, IQ, mana, HP } = OfficeWorker;
