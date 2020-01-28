const express = require('express');
const path = require('path');
const app = express();

let PORT = process.env.PORT || 8085;


//set up Express app to handle data parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/htmlRoutes")(app);

app.listen(PORT,()=>{
    console.log(`App listiening on ${PORT}`)
})