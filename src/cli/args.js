const parseArgs = () => {
    const arrArgs = process.argv.slice(2)
    const res = {}
    while (arrArgs.length > 0) {
        const argName = arrArgs.shift().slice(2);
        const argValue = arrArgs.shift();

        res[argName]=argValue
    }

    const end=Object.entries(res).map(([name,val])=>`${name} is ${val}`).join(", ")
    console.log(end)
};

parseArgs();