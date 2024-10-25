import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>([1, 2, 3, 4]);
    });

    test('should initialize with the first item as current', () => {
        expect(list.currentValue).toBe(1);
    });

    test('should move to the next item', () => {
        list.next();
        expect(list.currentValue).toBe(2);
        
        list.next();
        expect(list.currentValue).toBe(3);
    });

    test('should loop back to the first item when moving past the last item', () => {
        list.next(); // 2
        list.next(); // 3
        list.next(); // 4
        list.next(); // should loop back to 1
        expect(list.currentValue).toBe(1);
    });

    test('should move to the previous item', () => {
        list.prev();
        expect(list.currentValue).toBe(4); // should loop to the last item
        
        list.prev();
        expect(list.currentValue).toBe(3);
    });

    test('should loop back to the last item when moving before the first item', () => {
        list.prev(); // should loop to 4
        expect(list.currentValue).toBe(4);
        
        list.prev(); // 3
        expect(list.currentValue).toBe(3);
    });
});

describe('LinkedList with default value', () => {
    
    test('should initialize with the default item as current', () => {
        const list = new LinkedList<number>([1, 2, 3, 4], 3);
        expect(list.currentValue).toBe(3);
    });
    
});
