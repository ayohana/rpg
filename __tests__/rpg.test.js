import { OfficeWorker, Coworker, Daughter, CrackHead, CrackQueen } from '../src/rpg';

describe('OfficeWorker', () => {
  test("should correctly show object of OfficeWorker", () => {
    var player = new OfficeWorker();
    expect(player.name).toEqual("Anon");
    expect(player.IQ).toEqual(129);
    expect(player.mana).toEqual(100);
    expect(player.HP).toEqual(100);
  });
});

describe('Coworker', () => {
  test("should correctly show object of Coworker", () => {
    var player = new Coworker();
    expect(player.name).toEqual("Jeff");
    expect(player.IQ).toEqual(115);
    expect(player.mana).toEqual(100);
    expect(player.HP).toEqual(80);
  });
});

describe('Daughter', () => {
  test("should correctly show object of Daughter", () => {
    var player = new Daughter();
    expect(player.name).toEqual("Ellie");
    expect(player.IQ).toEqual(110);
    expect(player.mana).toEqual(150);
    expect(player.HP).toEqual(50);
  });
});

describe('Crackhead', () => {
  test("should correctly show object of Crackhead", () => {
    var enemy = new CrackHead();
    expect(enemy.name).toEqual("Crackhead");
    expect(enemy.mana).toEqual(200);
    expect(enemy.HP).toEqual(50);
  });
});

describe('CrackQueen', () => {
  test("should correctly show object of CrackQueen", () => {
    var enemy = new CrackQueen();
    expect(enemy.name).toEqual("Queen Cracktifa");
    expect(enemy.mana).toEqual(500);
    expect(enemy.HP).toEqual(100);
  });
});