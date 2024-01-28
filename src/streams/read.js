import { createReadStream } from "fs";
console.log("start")
const readStr = createReadStream("./src/streams/files/fileToRead.txt");
const read = async () => {
    readStr.pipe(process.stdout)
};

await read();
