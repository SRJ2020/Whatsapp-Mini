const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

main().then(() => {
    console.log("Connection successful to the DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "I lob you",
//     created_at: new Date()
// })

// chat1.save();

// HOME route
app.get("/", (req, res) => {
    res.send("root is working");
});

//ALL CHATS route
app.get("/chats", async (req, res) => {
    let chats =  await Chat.find();
    // res.send("All chats shown here");
    console.log(chats);
    res.render("index.ejs", {chats});
    
});

// NEW MESSAGE route
app.get("/chats/newMessage", (req, res) => {
    // res.send("recieved req");
    res.render("new.ejs");
});

app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    let chat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    // console.log(chat);
    chat.save().then((req,res) => {
        console.log("chat saved");
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});


app.listen(8080, () => {
    console.log("Server is up and good");
});
