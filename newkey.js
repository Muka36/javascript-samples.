 var user = function(firstname, coursecount) {
     
     this.firstname = firstname;
     this.coursecount = coursecount;
     
     this .getcoursecount = function() {
         console.log(`course count is: ${this.coursecount}`)
        // this. getfirstname = function(){
        //     console.log(`firstname is: ${this.firstname}`);
        // };
       
          
     };
 };

 user.prototype.getfirstname = function(){
     console.log(`firstname is: ${this.firstname}`);
 };

 var karthick = new user("karthick", 3);
 karthick.getcoursecount();
 
//  console.log(karthick);
karthick.getfirstname();
 var muthu = new user ("muthu", 4);
//  console.log(muthu);
muthu.getcoursecount();
if (muthu.hasOwnProperty("firstname")) {
    muthu.getfirstname();
}