interface ILinkedListItem<T> {
    value: T;
    next: () => ILinkedListItem<T>;
    prev: () => ILinkedListItem<T>;
}

export class LinkedList<T> {
    private curItem: ILinkedListItem<T>;
    private items: ILinkedListItem<T>[];

    constructor(values: Array<T>, defaultValue?: T){
        this.items = [];

        for (let i = 0; i < values.length; i++) {
            this.items.push({
                value: values[i],
                next: () => {
                    if (i === values.length - 1)
                        return this.items[0]
                    else return this.items[i + 1];
                },
                prev: () => {
                    if (i === 0)
                        return this.items[values.length - 1]
                    else return this.items[i - 1];
                },
    
            })
        }

        if(defaultValue) {
            const indx = this.items.findIndex((el) => el.value === defaultValue);
            this.curItem = this.items[indx];
        }
        else this.curItem = this.items[0];
    }

    next() {
        this.curItem = this.curItem.next();
    }

    prev() {
        this.curItem = this.curItem.prev();
    }

    get currentValue() {
        return this.curItem.value;
    }
}

