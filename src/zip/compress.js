import {createReadStream, createWriteStream} from "fs"
import { pipeline } from "stream";
import { createGzip } from "zlib";

const srcFile = createReadStream("./src/zip/files/fileToCompress.txt")
const zipStr=createGzip()
const zipFile = createWriteStream("./src/zip/files/archive.gz")
const compress = async () => {
    pipeline(
        srcFile,
        zipStr,
        zipFile,
        err=>console.error(err)
    )
};

await compress();