import { buildDoubleLinkedListNodes } from './DoubleLinkedList';

describe('When I create a DoubleLinkedList', () => {
  it('should return a map to the double linked list node', () => {
    const cache = buildDoubleLinkedListNodes(['foo', 'foo']);

    const result = cache.get('foo');

    expect(result?.val).toBe('foo');
  });
});
