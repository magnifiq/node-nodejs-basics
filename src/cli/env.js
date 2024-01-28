const parseEnv = () => {
    //console.log(process.env)
    const envVars = Object.keys(process.env).filter(el => el.startsWith("RSS_"));
    //console.log(envVars)
    const res=envVars.map(el=>`${el}=${process.env[el]}`) 
    console.log(res.join("; "))
};

parseEnv();