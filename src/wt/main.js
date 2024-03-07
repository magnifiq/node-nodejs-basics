import {cpus} from "os"
import { resolve } from "path"
import {Worker} from "worker_threads"

const BEGIN=10

const workFib=(num)=>{
    return new Promise(resolve=>{
        const worker = new Worker("./src/wt/worker.js", {workerData:num})

        worker.on('message', data=>resolve({
            status:"resolved",
            data
        }))
        worker.on('error', () => resolve({
            status: "error",
            data:null
        }))
    })
}
const performCalculations = async () => {
    const workersPool=Array.from({length:cpus().length}, (_,num)=>workFib(BEGIN+num))
    const res=await Promise.all(workersPool)
    console.log(res)
};




await performCalculations();
