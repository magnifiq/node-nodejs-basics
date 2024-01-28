import fs from "fs/promises"


const read = async () => {
    try{
        const res = await fs.readFile("./src/fs/files/fileToRead.txt", { encoding: "utf8" })
        console.log(res)
    }
    catch{
        throw new Error("FS operation failed");
    }
};

await read();