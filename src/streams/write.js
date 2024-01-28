import {createWriteStream} from "fs"

const wrStr = createWriteStream("./src/streams/files/fileToWrite.txt")
const write = async () => {
    process.stdin.pipe(wrStr)
};

await write();