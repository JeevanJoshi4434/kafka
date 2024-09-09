const { kafka } = require("./client");


async function init() {
    try { 
    const admin = kafka.admin();
    console.log("Admin Connected");
    admin.connect();
    console.log("Admin connection Succeded");
    console.log("Creating topic...");
    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions: 2,
        }]
    })
    console.log("Topic created success");
    console.log("Disconnecting Admin");
    admin.disconnect();
    console.log("Exit");
    
} catch (error) {
        console.log({error:true, msg:e});
}
}

init();
