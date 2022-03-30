var user = {
    name1 : "karthick",
    course: "",

    getusername: function() {
        console.log(`user name is: ${this.name1} `);
    },
    getcoursecount : function(){ 
        console.log(`usercourse is: ${this.course}`)
    }
};

var hitesh = Object.create(user,{
    name1: {value: "sammy"},
});
// console.log(hitesh);
// hitesh();
hitesh.getusername();

// user.prototype.getcoursecount = function(){ 
//     console.log(`usercourse is ${this.course}`)
// }

var muthu = Object.create(user, {
    course: {value: "javascript"},
});

muthu.getcoursecount();