import { OfficeWorker, Coworker, Daughter, CrackHead, CrackQueen, Player } from '../src/rpg';

describe ('Player', () => {

  let testPlayer;

  beforeEach(() => {
    testPlayer = new Player();
    testPlayer.assignCharacter("OfficeWorker");
  });

  test("should correctly show object of Player with specified character and level", () => {
    expect(testPlayer.char.name).toEqual("Anon");
    expect(testPlayer.level).toEqual(1);
  });

  test("should increase IQ by 5 when taking a book item", () => {
    testPlayer.take("book");
    expect(testPlayer.char.IQ).toEqual(134);
  });

  test("should level up to 2 when IQ is at least 133", () => {
    testPlayer.take("book");
    testPlayer.levelUp();
    expect(testPlayer.level).toEqual(2);
  });

});

describe('OfficeWorker', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new OfficeWorker();
    enemy = new CrackHead();
  });

  test("should correctly show object of OfficeWorker", () => {
    expect(player.name).toEqual("Anon");
    expect(player.IQ).toEqual(129);
    expect(player.mana).toEqual(100);
    expect(player.HP).toEqual(100);
  });

  test("should decrease mana and enemy HP by 5", () => {
    player.swingBriefcase(enemy);
    expect(player.mana).toEqual(95);
    expect(enemy.HP).toEqual(45);
  });

  test("should decrease mana and enemy HP by 10", () => {
    player.magicBlast(enemy);
    expect(player.mana).toEqual(90);
    expect(enemy.HP).toEqual(40);
  });
});


describe('Coworker', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Coworker();
    enemy = new CrackHead();
  });

  test("should correctly show object of Coworker", () => {
    expect(player.name).toEqual("Jeff");
    expect(player.IQ).toEqual(115);
    expect(player.mana).toEqual(100);
    expect(player.HP).toEqual(80);
  });

  test("should decrease player mana and HP by 5", () => {
    player.runAway();
    expect(player.mana).toEqual(95);
    expect(player.HP).toEqual(75);
  });

  test("should decrease mana by 20 and enemy HP by 10", () => {
    player.tackle(enemy);
    expect(player.mana).toEqual(80);
    expect(enemy.HP).toEqual(40);
  });
});

describe('Daughter', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Daughter();
    enemy = new CrackHead();
  });

  test("should correctly show object of Daughter", () => {
    let player = new Daughter();
    expect(player.name).toEqual("Ellie");
    expect(player.IQ).toEqual(110);
    expect(player.mana).toEqual(150);
    expect(player.HP).toEqual(50);
  });

  test("should decrease mana by 20 and enemy HP by 100", () => {
    player.pepperSpray(enemy);
    expect(player.mana).toEqual(130);
    expect(enemy.HP).toEqual(-50);
  });

  test("should decrease mana by 20 and enemy HP by 50", () => {
    player.punch(enemy);
    expect(player.mana).toEqual(130);
    expect(enemy.HP).toEqual(0);
  })
});

describe('Crackhead', () => {

  let enemy;
  let player;

  beforeEach(() => {
    enemy = new CrackHead();
    player = new Daughter();
  });

  test("should correctly show object of Crackhead", () => {
    expect(enemy.name).toEqual("Crackhead");
    expect(enemy.mana).toEqual(200);
    expect(enemy.HP).toEqual(50);
  });

  test("should decrease mana by 5 and player's HP by 5", () => {
    enemy.spit(player);
    expect(enemy.mana).toEqual(195);
    expect(player.HP).toEqual(45);
  });
});

describe('CrackQueen', () => {

  let enemy;
  let player;

  beforeEach(() => {
    enemy = new CrackQueen();
    player = new Daughter();
  });

  test("should correctly show object of CrackQueen", () => {
    expect(enemy.name).toEqual("Queen Cracktifa");
    expect(enemy.mana).toEqual(500);
    expect(enemy.HP).toEqual(100);
  });

  test("should decrease mana by 10 and decrease player's HP by 10", () => {
    enemy.syringeStab(player);
    expect(enemy.mana).toEqual(490);
    expect(player.HP).toEqual(40);
  });

  test("should decrease mana by 20 and increase HP by 20", () => {
    enemy.narcan();
    expect(enemy.mana).toEqual(480);
    expect(enemy.HP).toEqual(120);
  });
});

