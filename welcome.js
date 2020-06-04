let args = process.argv;
args.shift();
args.shift();

args[0] !== '-fn' ? guide() : application();

function guide() {
    console.log("Here are some helpful commands to pass when you run this file \n -fn 'First name'\n -ln 'Last name'");
    return;
}


function application() {
    var firstName, lastName;

    for(let i = 0; i < args.length; i++) {
        args[i] === '-fn' ? firstName = args[i+1] : args[i] === '-ln' ? lastName = args[i+1] : null;
    }

    console.log(`Welcome ${firstName} ${lastName}`);

    return;
}