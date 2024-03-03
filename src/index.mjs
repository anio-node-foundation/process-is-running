import process from "node:process"

export default function nodeIsProcessRunning(pid) {
	try {
		return process.kill(pid, 0)
	} catch (e) {
		return e.code !== "ESRCH"
	}
}
