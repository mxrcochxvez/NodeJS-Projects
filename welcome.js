let args = process.argv;
// removes "node" and the filename from the arguments.
args.shift();
args.shift();

//Controls the direction of the application
args[0] !== '-fn' ? guide() : application();

//Provides usage details
function guide() {
    console.log("Here are some helpful commands to pass when you run this file \n -fn 'First name'\n -ln 'Last name'");
    return;
}

//This is the application that takes the system arguments and sends you back a welcome message.
function application() {
    var firstName, lastName;

    for(let i = 0; i < args.length; i++) {
        args[i] === '-fn' ? firstName = args[i+1] : args[i] === '-ln' ? lastName = args[i+1] : null;
    }

    console.log(`Welcome ${firstName} ${lastName}`);

    return;
}
