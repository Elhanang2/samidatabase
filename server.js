 require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./routes/api/users");
const path = require("path");

const app = express();
//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, "client", "build")))

//DB Config
const db = require("./config/keys").MONGODB_URI;
// MONGODB_URI: "mongodb://aynasami:aynasami1@ds349247.mlab.com:49247/samidata"
//Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 7000;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port} !`))