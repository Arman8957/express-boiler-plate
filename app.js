const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("service running")

});



 
app.listen(3000, () => {
    console.log('Express server listening')
});





module.exports = app;  