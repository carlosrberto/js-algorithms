import Queue from './Queue';

describe('Queue', () => {
  const queue = new Queue();

  it('enqueue items', () => {
    queue.enqueue('foo');
    queue.enqueue('bar');
    expect(queue.toArray()).toEqual(['foo', 'bar']);
  });

  it('peek', () => {
    expect(queue.peek()).toEqual('foo');
  });

  it('dequeue first added item', () => {
    expect(queue.dequeue()).toEqual('foo');
    expect(queue.toArray()).toEqual(['bar']);
  });

  it('dequeue last added item', () => {
    expect(queue.dequeue()).toEqual('bar');
    expect(queue.toArray()).toEqual([]);
  });

  it('peek null', () => {
    expect(queue.peek()).toEqual(null);
  });
});
