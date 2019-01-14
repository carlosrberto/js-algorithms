import LinkedList from './LinkedList';

describe('LinkedList', () => {
  const list = new LinkedList();

  it('is empty', () => {
    expect(list.head).toEqual(null);
  });

  it('add first item', () => {
    list.append(1);
    expect(list.head.data).toEqual(1);
  });

  it('add second item', () => {
    list.append(2);
    expect(list.head.next.data).toEqual(2);
  });

  it('add third item', () => {
    list.append(3);
    expect(list.head.next.next.data).toEqual(3);
  });

  it('prepend an item', () => {
    list.prepend(0);
    expect(list.head.data).toEqual(0);
    expect(list.head.next.data).toEqual(1);
    expect(list.head.next.next.data).toEqual(2);
    expect(list.head.next.next.next.data).toEqual(3);
  });

  it('transverse the list', () => {
    expect(list.toArray()).toEqual([0, 1, 2, 3]);
  });

  it('reverse', () => {
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1, 0]);
  });

  it('delete head', () => {
    list.deleteHead();
    expect(list.head.data).toEqual(2);
    expect(list.head.next.data).toEqual(1);
  });
});
