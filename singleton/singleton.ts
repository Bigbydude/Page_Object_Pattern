class Singleton {
    static instance: Singleton;
    id: number;

    constructor(id: number) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const obj1 = new Singleton(10);
const obj2 = new Singleton(20);
console.log(obj1 === obj2);