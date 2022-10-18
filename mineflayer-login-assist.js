console.clear();
console.log("Beginning of Script")

const connect = require('./data/mc_login_info_example.js');
const on_line = (connect.yourusername01) // remember username changes
const off_line = (connect.offline)

var path = require('path');
var childProcess = require('child_process');

let ScriptName = module.filename.slice(__filename.lastIndexOf(path.sep)+1, 
	module.filename.length -3); 

if (process.argv.length < 2 || process.argv.length > 4) {
  console.log(`Usage : Node ${ScriptName}.js <filename> <online/offline>`)
	console.log(`	EG : C:\\myfolder>node startjs your-filename.js offline`)
  process.exit(1)
}

let file =  process.argv[2];
let sTateof = process.argv[3];
let endfiles = path.extname(file)

console.log(`\n`, "file used:      ", file ,`\n`, "online/offline: ", sTateof, `\n`);
console.log("This file ends with:", endfiles, "looking for", ".js", `\n`)

async function dirOnline() {
	let hostt = (on_line.host);
	let ports = (on_line.port);
	let usernamee = (on_line.username);
	let passwords = (on_line.password);
	dirOnline1 = childProcess.exec(`node ${file} ${ports} ${hostt} ${usernamee} ${passwords}`, function (error, stdout, stderr) {
	if (error) {
		console.log(error.stack);
		console.log('Error code: '+error.code);
		console.log('Signal received: '+error.signal);
	  }    
		console.log('Child Process STDOUT: '+stdout);
		console.log('Child Process STDERR: '+stderr);	
	})
	dirOnline1.on('exit', async function (code) {   
		await console.log('Child process exited with exit code '+code);
	});
};

async function dirOffline() {
	let hostt = (off_line.host);
  let ports = (off_line.port);
	let usernamee = (off_line.username);
	dirOffline1 = childProcess.exec(`node ${file} ${hostt} ${ports} ${usernamee}`, function (error, stdout, stderr) {
		if (error) {
		console.log(error.stack);
		console.log('Error code: '+error.code);
		console.log('Signal received: '+error.signal);
	  }    
		console.log('Child Process STDOUT: '+stdout);
		console.log('Child Process STDERR: '+stderr);
	})
	dirOffline1.on('exit', async function (code) {   
		await console.log('Child process exited with exit code '+code);
	});
};

function StatePass() {
		if (sTateof === !String('online' || 'offline')) {
				console.log("error check your spelling");
				console.log("End of Sctript")
		}
		if (sTateof === 'online') {
				console.log("online mode");
				dirOnline();
			}
		else {
			console.log("offline mode");
			dirOffline();
	}
}
StatePass();

function FilePass() {
if (endfiles != ('.js')) {
	console.log("error wrong file type")
	return;
	}
else {
	console.log("Pass")
	return;
	}
}
FilePass()

console.log(`\n`, "End of Script",`\n`)

console.log("Start")
console.log("argument 0 = ", process.argv[0]);
console.log("argument 1 = ", process.argv[1]);
console.log("argument 2 = ", process.argv[2]);
console.log("argument 3 = ", process.argv[3]);
console.log("argument 4 = ", process.argv[4]);
console.log("argument 5 = ", process.argv[5]);
console.log("argument 6 = ", process.argv[6]);
console.log("argument 7 = ", process.argv[7]);
console.log("Stop", `\n`)
console.log("Results:", `\n`)

/*  const connect = require('./data/mc_login_info_example.js'); use as templete
/*  const connect = require('./data/mc_login_info.js');

>mc_Login_info_example.js templete
>mc_login_info.js

module.exports = {
	AnyExampleOnllineName:{
		"host":"localhost",
		"username":"email@address.com",
		"password":"password",
		"port":"25565",
		"version":"1.16.4,
		}
	AnyExampleOnllineName:{
		"host":"localhost",
		"username":"AnyName",
		"port":"25565",
		}
	masters:{
		Your_UserName, 
		Someone_You_Trust_Username_1, 
		Someone_You_Trust_Username_2, 
		etc
	}
}
*/