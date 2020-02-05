import { OfficeWorker, Coworker, Daughter, CrackHead, CrackQueen } from '../src/rpg';

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
  test("should correctly show object of Crackhead", () => {
    let enemy = new CrackHead();
    expect(enemy.name).toEqual("Crackhead");
    expect(enemy.mana).toEqual(200);
    expect(enemy.HP).toEqual(50);
  });
});

describe('CrackQueen', () => {
  test("should correctly show object of CrackQueen", () => {
    let enemy = new CrackQueen();
    expect(enemy.name).toEqual("Queen Cracktifa");
    expect(enemy.mana).toEqual(500);
    expect(enemy.HP).toEqual(100);
  });
});