import fs from "fs/promises";
import { createHash } from "crypto";

const calculateHash = async () => {
    const data = await fs.readFile("./src/hash/files/fileToCalculateHashFor.txt");
    const res = createHash("sha256").update(data).digest("hex");
    console.log(res)
};

await calculateHash();