const express = require('express');

//const fileupload = require('express-fileupload');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));
//app.use(fileupload());

const db = require("./src/db/config")
const routes = require('./src/route/route')


app.use('/user', routes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening to PORT ${PORT}`);
})
})