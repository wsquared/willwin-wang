export class DoubleLinkedListNode<K, V> {
  private _next: DoubleLinkedListNode<K, V> | undefined;
  private _prev: DoubleLinkedListNode<K, V> | undefined;
  private _key: K | undefined;
  private _value: V | undefined;

  constructor(key?: K, value?: V) {
    this._key = key;
    this._value = value;
  }

  get key(): K | undefined {
    return this._key;
  }

  get val(): V | undefined {
    return this._value;
  }

  set val(value: V | undefined) {
    this._value = value;
  }

  get prev(): DoubleLinkedListNode<K, V> | undefined {
    return this._prev;
  }

  set prev(value: DoubleLinkedListNode<K, V> | undefined) {
    this._prev = value;
  }

  get next(): DoubleLinkedListNode<K, V> | undefined {
    return this._next;
  }

  set next(value: DoubleLinkedListNode<K, V> | undefined) {
    this._next = value;
  }
}

export const buildDoubleLinkedListNodes = <K, T>(
  firstNode: [K, T],
  ...rest: [K, T][]
): Map<K, DoubleLinkedListNode<K, T>> => {
  let head = new DoubleLinkedListNode<K, T>(firstNode[0], firstNode[1]);
  const cache = new Map<K, DoubleLinkedListNode<K, T>>();
  cache.set(firstNode[0], head);
  const temp = head;

  for (const [key, value] of rest) {
    const node = new DoubleLinkedListNode(key, value);
    cache.set(key, node);
    head.next = node;
    node.prev = head;
    head = head.next;
  }

  head.next = temp;
  temp.prev = head;

  return cache;
};
