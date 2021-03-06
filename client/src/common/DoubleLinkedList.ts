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
