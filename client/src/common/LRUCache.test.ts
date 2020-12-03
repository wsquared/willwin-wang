import { LRUCache } from './LRUCache';

describe('When I initialise a LRUCache with a capacity', () => {
  let lruCache: LRUCache<string, string>;

  beforeEach(() => {
    lruCache = new LRUCache(2);
  });

  describe('When I put entries that exceed the capacity', () => {
    it('should evict my earliest entry', () => {
      lruCache.put('foo', 'bar');
      lruCache.put('baz', 'qux');
      lruCache.put('quux', 'quuz');

      expect(lruCache.get('foo')).toBe(undefined);
    });

    describe('When I get an entry', () => {
      it('should evict my earliest entry', () => {
        lruCache.put('foo', 'bar');
        lruCache.put('baz', 'qux');
        lruCache.get('foo');
        lruCache.put('quux', 'quuz');

        expect(lruCache.get('baz')).toBe(undefined);
      });
    });
  });

  describe('When I put a key value', () => {
    it('should return the value I get', () => {
      lruCache.put('foo', 'bar');

      expect(lruCache.get('foo')).toBe('bar');
    });
  });
});
