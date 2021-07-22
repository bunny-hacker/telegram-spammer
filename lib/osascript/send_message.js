const seApp = Application('System Events')
const messagesApp = Application('Telegram')
messagesApp.includeStandardAdditions = true;

// Run and get passed in arguments
ObjC.import('stdlib')                               // for exit

var args = $.NSProcessInfo.processInfo.arguments    
var argv = []
var argc = args.count
for (var i = 4; i < argc; i++) {
    // skip 3-word run command at top and this file's name
    argv.push(ObjC.unwrap(args.objectAtIndex(i)))  
}

const message = argv[0]

sendNewMessage(message)

function sendNewMessage(message) {
    messagesApp.activate()

    // Adjust delay as necessary
    delay(0.2)

    seApp.keystroke(message)
    seApp.keyCode(36)

    return
}


// Should prevent app from quitting
function quit() {
    return true;
}

seApp.keyUp(59)
$.exit(0)