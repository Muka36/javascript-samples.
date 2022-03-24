var karthick = {
    firstname : "muthu",
    lastname : "karthick",
    password : "thamotharan",
    id : "19up36",
    time : 12.00,
    facebooksignedin : true,
    courselist: [],
    buycourse: function(coursename) {
        this.courselist.push(coursename);
    },
    getcoursecount: function () {
        return `${this.firstname} is enrolled in total of ${this.courselist.length} courses`;

    }


    // console.log(this. firstname);
}

 
// var info = karthick;
karthick.buycourse("react course");
var info = console.log(karthick.getcoursecount());


var info = karthick;
 console.log(info);