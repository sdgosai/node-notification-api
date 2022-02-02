// Require Dependencies & Use
const express = require('express');
const app = express();

// Require Database
const firebase = require('./connDB/conn')

// Routes require ...
app.use('/api/notification', require('./router/notificationRouter'));

// Assign Port 7000...
const port = process.env.PORT || 7000;
app.get("/", async (req, res) => {
    res.send("Hello, Welcome in my website home menu :)");
})
app.listen(port, () => {
    console.log(`node application live at ${port}...`);
});