import { DoubleLinkedListNode } from './DoubleLinkedList';

describe('When I create a DoubleLinkedList', () => {
  it('should have next node', () => {
    const dll = new DoubleLinkedListNode('foo', 'foo');
    const nextNode = new DoubleLinkedListNode('bar', 'qux');

    dll.next = nextNode;

    expect(dll.next).toEqual(nextNode);
  });

  it('should have previous node', () => {
    const dll = new DoubleLinkedListNode('foo', 'foo');
    const prevNode = new DoubleLinkedListNode('bar', 'qux');

    dll.prev = prevNode;

    expect(dll.prev).toEqual(prevNode);
  });
});
