import Team from '../src/Team';
import Character from '../src/Character';

describe('Team class', () => {
  let team;
  let char1;
  let char2;
  let char3;

  beforeEach(() => {
    team = new Team();
    char1 = new Character('Лучник');
    char2 = new Character('Маг');
    char3 = new Character('Воин');
  });

  test('should create empty team', () => {
    expect(team.members.size).toBe(0);
    expect(team.toArray()).toEqual([]);
  });

  test('add method should add character', () => {
    team.add(char1);
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.size).toBe(1);
  });

  test('add method should throw error when adding duplicate', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Персонаж уже есть в команде');
  });

  test('addAll should add multiple characters without duplicates', () => {
    team.addAll(char1, char2, char1, char3);
    expect(team.members.size).toBe(3);
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.has(char2)).toBe(true);
    expect(team.members.has(char3)).toBe(true);
  });

  test('toArray should return array of members', () => {
    team.addAll(char1, char2);
    const arr = team.toArray();
    expect(arr).toEqual([char1, char2]);
    expect(Array.isArray(arr)).toBe(true);
  });
});
