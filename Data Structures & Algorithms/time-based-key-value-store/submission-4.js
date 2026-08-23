class TimeMap {
    constructor() {
        this.store = {}; 
    }

    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }
        this.store[key].push([value, timestamp]);
    }

    get(key, timestamp) {
        if (!this.store[key]) return "";

        let l = 0;
        let r = this.store[key].length - 1;
        let out = "";

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            const element = this.store[key][m];

            if (timestamp >= element[1]) {
                out = element[0]; 
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        
        return out;
    }
}
