import { DoubleLinkedListNode } from './DoubleLinkedList';

export class LRUCache<K, V> {
  private _capacity: number;
  private _head: DoubleLinkedListNode<K, V>;
  private _tail: DoubleLinkedListNode<K, V>;
  private _cache: Map<K, DoubleLinkedListNode<K, V>>;

  constructor(capacity: number) {
    this._capacity = capacity;
    this._head = new DoubleLinkedListNode();
    this._tail = new DoubleLinkedListNode();
    this._head.next = this._tail;
    this._tail.prev = this._head;
    this._cache = new Map<K, DoubleLinkedListNode<K, V>>();
  }

  private _pop(): DoubleLinkedListNode<K, V> | undefined {
    const node = this._tail.prev;

    this._remove(node);

    return node;
  }

  private _appendLeft(node: DoubleLinkedListNode<K, V> | undefined): void {
    if (!node) {
      return;
    }

    const next = this._head.next;

    if (!next) {
      return;
    }

    next.prev = node;

    node.next = next;

    node.prev = this._head;

    this._head.next = node;
  }

  private _remove(node: DoubleLinkedListNode<K, V> | undefined): void {
    if (!node) {
      return;
    }

    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }
  }

  get(key: K): V | undefined {
    if (!this._cache.has(key)) {
      return;
    }

    const node = this._cache.get(key);
    this._remove(node);
    this._appendLeft(node);

    return node?.val;
  }

  put(key: K, value: V): V | undefined {
    let node = this._cache.get(key);

    if (!node) {
      node = new DoubleLinkedListNode(key, value);
    } else {
      node.val = value;
      this._remove(node);
    }

    this._cache.set(key, node);
    this._appendLeft(node);

    if (this._cache.size > this._capacity) {
      const tail = this._pop();

      if (tail && tail.key) {
        this._cache.delete(tail.key as K);
      }
    }

    return node.val;
  }
}
