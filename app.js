const { exec } = require('child_process')

console.log("HEY WE ARE GOING TO KILL THIS SVCHOST !! ")

function getMatches(string, regex, index = 1) {
	const matches = []
	let match
	while (match = regex.exec(string)) matches.push(match[index])
	return matches;
}

setInterval(() => {
	exec(`netstat -b -o -n`, (error, stdout, stderr) => {
		const out = stdout.split("\n")
		for (let i = 0; i < out.length; i++) { 
			const e = out[i];
			if (e.includes("[svchost.exe]")) {
				let pid = out[i + 1].split(" ")
				pid = pid[pid.length-1].replace("\r", "")

				if (pid && +pid > 0)
				{
					console.log("kill process with name " + e + " and pid : " + pid)
					exec("taskkill /F /PID " + pid, (er, ou, serr) => console.log(ou))		
					break;
				}
			}
		}
	})
}, 3000)


