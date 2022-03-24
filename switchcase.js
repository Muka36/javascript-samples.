var user = "user";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
        case "subadmin":
        console.log("get access to create/delete courses");
        break;
        case "testrep":
        console.log("get access to create/delete tests");
        break;
        // case "user":
        //     console.log("You get access to consume content");
        //     break;

    default :
      console.log("you get access to consume content");
        break;
}
