const curry = {

  firstname: "karthick",
  lastname: "Thamotharan",
  role : "Admin",
  coursecount: 5,
  getInfo: function () {

    console.log (`
    First name is ${this.firstname}
    Lastname is ${this.lastname}
    His role is ${this.role}
    and he is studing ${this.coursecount}courses
    
    `);
  }




}

const karthick = {
    firstname: "muthu",
  lastname: "muka",
  role : "Sub-Admin",
  coursecount: 8,
}

// curry.getInfo.bind(karthick)();

curry.getInfo.call(karthick);