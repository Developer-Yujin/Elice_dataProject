import LRU from 'lru-cache';

const options = {
  max: 500,
  maxAge: 1000 * 60 * 60,
  maxSize: 30000,
  length(n, key) {
    return 1;
  },
  dispose(key, n) {
    /* 데이터가 삭제된 후 호출 */
  },
};

const lcache = new LRU(options);

function cacheset(key, value) {
  lcache.set(key, value);
}

function cacheget(key) {
  const result = lcache.get(key);
  return result;
}

function cachehas(key) {
  return lcache.has(key);
}

export { cacheget, cachehas, cacheset };
