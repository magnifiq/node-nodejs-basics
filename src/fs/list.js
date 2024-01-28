import fs from "fs/promises";

const list = async () => {
    try{
        const arr=await fs.readdir('./src/fs/files')
        console.log(arr)
    }
    catch{
        throw new Error("FS operation failed");
    }
};

await list();