# 🚀 Node Realtime Chat Backend

A scalable and efficient **real-time chat backend** built using Node.js, WebSockets, and modern backend practices. This project enables instant messaging between users with low latency and reliable communication.

---

## 📌 Features

* ⚡ Real-time messaging using WebSockets (Socket.IO)
* 👥 Multi-user chat support
* 🔐 User connection & disconnection handling
* 📨 Instant message broadcasting
* 📡 Event-driven architecture
* 🧩 Scalable backend structure
* 🛠 Error handling and logging

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **Socket.IO**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
node-realtime-chat-backend/
│── server.js
│── package.json
│── /src
│    ├── config/
│    ├── controllers/
│    ├── sockets/
│    └── utils/
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/VandanaChauhan01/node-realtime-chat-backend.git
```

2. Navigate to the project folder

```
cd node-realtime-chat-backend
```

3. Install dependencies

```
npm install
```

4. Start the server

```
npm start
```

---

## 🌐 How It Works

* The server establishes a WebSocket connection using Socket.IO
* Clients connect and join the chat
* Messages are emitted and broadcast in real-time
* Server listens for events like:

  * `connection`
  * `message`
  * `disconnect`

---

## 🔌 API / Socket Events

| Event Name | Description                  |
| ---------- | ---------------------------- |
| connection | Triggered when user connects |
| message    | Sends message to all users   |
| disconnect | Triggered when user leaves   |

---

## 📈 Future Enhancements

* ✅ User authentication (JWT)
* ✅ Private chat rooms
* ✅ Message persistence (MongoDB)
* ✅ Typing indicators
* ✅ Read receipts

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

**Vandana Chauhan**
📧 [vanduganolta@gmail.com](mailto:vanduganolta@gmail.com)
🔗 GitHub: https://github.com/VandanaChauhan01

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!

---
