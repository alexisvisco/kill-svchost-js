const { exec } = require('child_process')

console.log("-- Now you have 100% of your internet connection --")

const getMatches = (string, regex, index = 1) => regex.exec(string)[index];

function getPid(array, i) {
	while (array[i--])
		if (array[i].includes("TCP"))
			return getMatches(array[i].replace('\r', '') + '@', /(\d+@)/, 1).replace('@', '')
}

const delSvchost = () => exec(`netstat -b -o -n`, (error, stdout, stderr) => {
	const out = stdout.split("\n")
	const killed = new Set()
	for (let i = 0; i < out.length; i++) {
		const e = out[i];
		if (e.includes("svchost.exe")) {
			let pid = getPid(out, i)

			if (pid && !killed.has(pid)) {
				killed.add(pid)
				console.log("Kill process with pid " + pid + ".")
				exec("taskkill /F /PID " + pid, (er, ou, serr) => { })
			}
		}
	}
})

setInterval(() => {
	delSvchost()
}, 8000)
