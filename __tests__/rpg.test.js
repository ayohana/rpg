import { OfficeWorker } from '../src/rpg';

describe('OfficeWorker', () => {
  test("should correctly display or show stats of OfficeWorker", () => {
    var player = new OfficeWorker();
    expect(player.name).toEqual("Anon");
    expect(player.IQ).toEqual(129);
    expect(player.mana).toEqual(100);
    expect(player.HP).toEqual(100);
  });
});

