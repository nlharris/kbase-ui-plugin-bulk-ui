
export class Sorter {
    direction: number;
    key: string;

    constructor() {
        this.direction = 1;
    }

    sort(key, data, order?) {
        if (order == 'asc') this.direction = 1;

        if (this.key === key)
            this.direction = -1 * this.direction;
        else
            this.direction = 1;

        this.key = key;

        data.sort((a,b) => {
            if(a[key] === b[key])
                return 0;
            else if (a[key] > b[key])
                return 1 * this.direction;
            else
                return -1 * this.direction;
        });
    }


    magicSort(key, data, reverse) {

        data.sort((a,b) => {
            if(a[key] === b[key])
                return 0;
            else if (a[key] > b[key])
                return 1;
            else
                return -1;
        });

        if (reverse) data.reverse();
    }
}