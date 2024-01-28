import {pipeline, Transform} from "stream"

const oper=new Transform({
    transform(chunk,_,callback){
        const str=chunk.toString().trim()
        const revStr=str.split("").reverse().join("")
        callback(null, revStr+"\n")
    }
})

const transform = async () => {
   pipeline(
       process.stdin,
       oper,
       process.stdout,
       err=>console.err(err)
   )
};

await transform();