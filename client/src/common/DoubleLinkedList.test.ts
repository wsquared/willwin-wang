import {
  buildDoubleLinkedListNodes,
  DoubleLinkedListNode,
} from './DoubleLinkedList';

describe('When I create a DoubleLinkedList', () => {
  it('should return a map to the double linked list node', () => {
    const cache = buildDoubleLinkedListNodes(['foo', 'foo']);

    const result = cache.get('foo');

    expect(result?.val).toBe('foo');
  });

  describe('When I add more than one node', () => {
    let cache: Map<string, DoubleLinkedListNode<string, string>>;

    beforeEach(() => {
      cache = buildDoubleLinkedListNodes(['foo', 'foo'], ['bar', 'bar']);
    });

    it('should able to go next node', () => {
      const fooNode = cache.get('foo');

      expect(fooNode?.next?.val).toBe('bar');
    });

    it('should able to go to previous node', () => {
      const fooNode = cache.get('foo');

      expect(fooNode?.prev?.val).toBe('bar');
    });
  });
});
