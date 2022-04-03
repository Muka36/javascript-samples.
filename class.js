class User {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    courselist = [];

    getinfo() {
        return {name: this.name, email : this.email};
    }
    enrollcourse (name){
        this.courselist.push(name)
    }
    getcourselist () {
        return this.courselist;
    }
    static login() {
        return " You are logged in";
    }
}

class subadmin extends User {
    constructor(name, email){
        super (name, email);
    }
    getadmininfo() {
        return " I am subadmin";
    }
}

// let hitesh = User ('hitesh', '')
module.exports = User;

const tom = new subadmin('tom', 'hia.com', 'kar');
console.log(tom.getadmininfo());
console.log(tom.login());
console.log (tom.getinfo());