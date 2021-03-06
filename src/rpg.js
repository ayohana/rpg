// Game Class =================
export class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
    this.currentSpace = this.board.space5;
    this.enemy = new CrackHead();
    this.enemySpace = this.board.space1;
  }

  assignMove(moveInput) {
    if (moveInput === "North") {
      this.currentSpace.moveNorth();
    } else if (moveInput === "East") {
      this.currentSpace.moveEast();
    } else if (moveInput === "South") {
      this.currentSpace.moveSouth();
    } else if (moveInput === "West") {
      this.currentSpace.moveWest();
    }
  }

  checkEnemy() {
    if (this.currentSpace.xCoordinate === this.enemySpace.xCoordinate && 
      this.currentSpace.yCoordinate === this.enemySpace.yCoordinate ){
      return true;
    }
  }
}

// Battle Class =================
export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  checkTurn() {
    if (this.enemy.turn === 1) {
      this.enemy.turn = 0;
      this.player.turn = 1;
      return true; // enemy's turn
    } else if (this.enemy.turn === 0) {
      this.enemy.turn = 1;
      this.player.turn = 0;
      return false; // player's turn
    }
  }

  enterBattle(skillSelect) {
    this.enemy.spit(this.player);
    if (skillSelect === "skillSwingBriefcase") {
      this.player.char.swingBriefcase(this.enemy);
    } else if (skillSelect === "skillMagicBlast") {
      this.player.char.magicBlast(this.enemy);
    } else if (skillSelect === "skillRunAway") {
      this.player.char.runAway(this.enemy);
    } else if (skillSelect === "skillTackle") {
      this.player.char.tackle(this.enemy);
    } else if (skillSelect === "skillPepperSpray") {
      this.player.char.pepperSpray(this.enemy);
    } else if (skillSelect === "skillPunch") {
      this.player.char.punch(this.enemy);
    }
  }
}

// Board Class =================
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

// Space Class =================
export class Space {
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  moveNorth() {
    if (this.xCoordinate > 1) {
      this.xCoordinate -= 1;
    }
  }

  moveEast() {
    if (this.yCoordinate < 3) {
      this.yCoordinate += 1;
    }
  }

  moveSouth() {
    if (this.xCoordinate < 3) {
      this.xCoordinate += 1;
    }
  }

  moveWest() {
    if (this.yCoordinate > 1) {
      this.yCoordinate -= 1;
    }
  }
}

// Player Class =================
export class Player {
  constructor() {
    this.char;
    this.level = 1;
    this.turn = 0;
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

// OfficeWorker Class =================
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

// Coworker Class =================
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

// Daughter Class =================
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

// CrackHead Class =================
export class CrackHead {
  constructor() {
    this.name = "Crackhead";
    this.mana = 200;
    this.HP = 50;
    this.turn = 1;
  }

  spit(player) {
    this.mana -= 5;
    player.char.HP -= 5;
  }
}

// CrackQueen Class =================
export class CrackQueen {
  constructor() {
    this.name = "Queen Cracktifa";
    this.mana = 500;
    this.HP = 100;
  }

  syringeStab(player) {
    this.mana -= 10;
    player.char.HP -= 10;
  }

  narcan() {
    this.mana -= 20;
    this.HP += 20;
  }
}