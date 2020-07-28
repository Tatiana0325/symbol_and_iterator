class Team {
    constructor(name, type, health, level, attack, defance) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defance = defance;
    }
}

Team[Symbol.iterator] = function(obj) {
    return {
        next() {
            if (obj instanceof Team) {
                return {
                    done: false,
                    value: obj
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}