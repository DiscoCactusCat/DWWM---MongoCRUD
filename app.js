const express = require('express');
const app = express();
const PORT = 3000;

// URL encodées
app.use(express.urlencoded({extended: true}));
// Format JSON
app.use(express.json());

const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://caroline:caroline@cluster0.gfvqb.mongodb.net/CRM_DB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("MongoDB CRM_DB connected successfully !");
});

const router = require('./src/routes/crmRoutes');
router.routes(app);


app.get('/', (req,resp)=>{
    resp.send("Express server is running on port : " + PORT);
});

app.listen(PORT, ()=>{
    console.log('Serveur running on port', PORT);
})