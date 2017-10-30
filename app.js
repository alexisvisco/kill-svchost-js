const { exec } = require('child_process')

console.log("-- Now you have 100% of your internet connection --")

function getMatches(string, regex, index) {
	index || (index = 1);
	var matches = [];
	var match;
	while (match = regex.exec(string)) {
		return match[index];
	}
}

function getPid(array, i) {
	while (array[i--])
		if (array[i].includes("TCP"))
			return +getMatches(array[i] + '@', /(\d+@)/).replace('@', '')
}

const delSvchost = () => exec(`netstat -b -o -n`, (error, stdout, stderr) => {
	const out = stdout.split("\n")
	for (let i = 0; i < out.length; i++) {
		const e = out[i];
		if (e.includes("svchost.exe")) {
			let pid = getPid(out, i)
			console.log(pid)
			if (pid) {
				console.log("Kill process with pid " + pid + ".")
				exec("taskkill /F /PID " + pid, (er, ou, serr) => { })
				break;
			}
		}
	}
})

setInterval(() => {
	delSvchost()
}, 8000)
