console.log(this);

var user = {
    firstname: "karthick",
    coursecount: 4,
    getcoursecount: function () {
        console.log("line 7", this);
        function sayhello() {
            console.log('hello');
            console.log('line 10', this)
        }
        sayhello();
    }
}
user.getcoursecount();