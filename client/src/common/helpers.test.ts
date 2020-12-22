import { range } from './helpers';

describe('range', () => {
  it('should create a range of start to end', () => {
    expect(range(1, 10)).toHaveLength(10);
  });

  it('should step for defined range', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
});
