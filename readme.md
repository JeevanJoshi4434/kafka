# Kafka Basics

[**Piyush Garg | Kafka - YouTube**](https://www.youtube.com/watch?v=ZJJHm_bd9Zo&t=2726s)  
*10 September 2024*  
*Basic Producer & Consumer Concepts*

### Setup

- **Node.js**
- **Docker**
- **VSCode**

For more detailed setup instructions, visit [Piyush's Setup Gist - GitHub](https://gist.github.com/piyushgarg-dev/32cadf6420c452b66a9a6d977ade0b01).

### File Overview

- **client.js**: Exports the Kafka instance/object so that it can be used globally.
  ```javascript
  const { Kafka } = require("kafkajs");
  
  exports.kafka = new Kafka({
      brokers: ['localhost:9092'],
      clientId: "kafka-app",
  });
  ```

- **admin.js**: Manages topic creation and configuration, including setting the number of partitions.
- **consumer.js**: Defines the consumer that listens to and processes messages from Kafka topics.
- **producer.js**: Defines the producer that sends messages to a specific topic and partition.

### What I Learned

- **Kafka and Throughput**: Kafka is designed for high throughput, making it suitable for processing large streams of data efficiently.
- **Temporary Storage**: Kafka provides temporary storage with configurable retention periods, which is useful for buffering data.
- **Databases vs. Kafka**: Traditional databases typically offer lower throughput but provide large, permanent storage. In contrast, Kafka excels in handling high-throughput data streams but with temporary storage.
- **Pub/Sub Architecture**: Kafka uses a publish/subscribe (pub/sub) model, which enables scalable and asynchronous communication.

### Pub/Sub Architecture

The publish/subscribe (pub/sub) architecture is a messaging pattern where:

- **Publishers**: Entities that generate and send messages.
- **Subscribers**: Entities that receive and process messages.

In this model:

- **Asynchronous Communication**: Publishers and subscribers are decoupled. Publishers do not need to wait for subscribers to receive messages, and vice versa. This allows for high scalability and flexibility.
- **Multiple Publishers and Subscribers**: The architecture supports multiple publishers sending messages to multiple subscribers, facilitating a highly scalable and distributed system.
- **Event-Driven Systems**: Pub/sub is commonly used in event-driven architectures, where actions in one part of the system trigger events that other parts of the system respond to.

For a visual representation, refer to the image below:
![Pub/Sub Architecture](https://media.geeksforgeeks.org/wp-content/uploads/20240305120858/what-is-pub-sub-architecture-banner.webp)

### Conclusion

This repository is based on the [Piyush Garg | Kafka - YouTube](https://www.youtube.com/watch?v=ZJJHm_bd9Zo&t=2726s) video. While I have followed the tutorial closely, I have not added any original content beyond what was demonstrated in the video.

Special thanks to [Piyush Garg - YouTube](https://www.youtube.com/@piyushgargdev) for the valuable resources.

Stay tuned for more creative content on Kafka. Follow my [Medium profile](https://medium.com/@jeetbhaiya25) for updates.

Thank you!