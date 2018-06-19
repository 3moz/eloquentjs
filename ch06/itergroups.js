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
        return g.members;
    }
}

//this block ...
for (let value of Group.from(["a", "b", "c", 7])) {
    console.log(value);
}

//and this block ...
let g = Group.from(["a", "b", "c", 7]);
for (i of g[Symbol.iterator]()) {
    console.log(i);
}

//both produce:
/**
 * a
 * b
 * c
 * 7
 */