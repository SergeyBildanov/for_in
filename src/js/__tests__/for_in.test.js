import orderByProps from '../for_in';

test('Order by props test', () => {
  const result = orderByProps({name: 'Демон', health: 50, level: 5, attack: 23, defence: 54}, ["name", "level", "attack"])
  const correct = [
    {name: 'Демон'},
    {level: 5},
    {attack: 23},
    {defence: 54},
    {health: 50},
  ]
  expect(result).toEqual(correct);
});
