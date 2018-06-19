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
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
/**
 * a
 * b
 * c
 */