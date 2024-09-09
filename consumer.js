const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
    try {
        const consumer = kafka.consumer({ groupId: group });

        await consumer.connect();
        await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
                try {
                    console.log(`group:${group} [${topic}]: PART:${partition}:`, message.value.toString());
                    
                    // Send heartbeat to avoid session timeout
                    await heartbeat();
                } catch (error) {
                    console.error('Error processing message:', error);
                }
            }
        });

        // Graceful shutdown
        process.on('SIGTERM', async () => {
            console.log('SIGTERM signal received.');
            await consumer.disconnect();
            process.exit(0);
        });

        process.on('SIGINT', async () => {
            console.log('SIGINT signal received.');
            await consumer.disconnect();
            process.exit(0);
        });

    } catch (error) {
        console.error('Error in consumer initialization:', error);
        process.exit(1);
    }
}

init();
