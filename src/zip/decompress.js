import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream";
import { createGunzip } from "zlib";


const zipFile = createReadStream("./src/zip/files/archive.gz")
const unzipStr=createGunzip()
const unzipFile = createWriteStream("./src/zip/files/fileToCompress.txt") 
const decompress = async () => {
    pipeline(
        zipFile,
        unzipStr,
        unzipFile,
        err=>console.error(err)
    )
};

await decompress();