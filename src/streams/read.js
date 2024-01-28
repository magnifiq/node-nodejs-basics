import { createReadStream } from "fs";

const readStr = createReadStream("./src/streams/files/fileToRead.txt");
const read = async () => {
    readStr.pipe(process.stdout)
};

await read();