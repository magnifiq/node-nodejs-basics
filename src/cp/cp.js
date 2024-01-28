import {spawn} from "child_process"



const spawnChildProcess = async (args) => {
    const inst = spawn('node', ["./src/cp/files/script.js", ...args])

    process.stdin.pipe(inst.stdin)
    inst.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess([40, "q",4, "t"]);
