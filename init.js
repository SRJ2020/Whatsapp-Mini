//this is to insert sample collections into the db
// insert chats samples into the db
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("Connection successful to the DB");
})
.catch(err => console.log(err));

let allChat = [
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "I lob you",
        created_at: new Date()
    }                      
];

Chat.insertMany(allChat);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

