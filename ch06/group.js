class Group {

    constructor() {
        this.members = [];
    }

    has(item) {

        return this.members.includes(item);
    }

    add(item) {
        var g = this;
        if (!g.has(item)) {
            this.members.push(item);
        }
    }

    delete(item) {
        var g = this;
        if (g.has(item)) {
            g.members = g.members.filter(
                k => k != item
            )
        }
    }

    static from(iter) {
        var g = new Group();
        for (var i of iter) {
            if (g.has(i)) {
                console.log(g.members, " already has ", i);
            } else { g.add(i); }

        }
        return g;
    }
}

//creates new group with [10,20]
let g = Group.from([10, 20]);

console.log(g.has(10));
//should be true
console.log(g.has(12));
//should be false
console.log("contents: ", g.members);
//should be [10,20]
g.add(10);
console.log("contents: ", g.members);
//should be [10,20] still
g.add(30);
console.log("contents: ", g.members);
//should be [10,20,30]
g.delete(10);
console.log("contents: ", g.members);
//should be [20,30]