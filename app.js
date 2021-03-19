const express = require('express');
const app = express();

const router = require('./src/routes/crmRoutes');
router.routes(app);

const PORT = 3000;

app.get('/', (req,resp)=>{
    resp.send("Express server is running on port : " + PORT);
});

app.listen(PORT, ()=>{
    console.log('Serveur running on port', PORT);
})