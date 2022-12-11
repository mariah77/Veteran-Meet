const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./DB.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//import schema/user.js
const User = require('./schema/user.js');
const Post = require('./schema/post.js');
const Events = require('./schema/event.js');

app.use('/users', require('./routes/routeUser.js').router);
app.use('/posts', require('./routes/routePost.js').router);
app.use('/events', require('./routes/routeEvent.js').router);


app.listen(port, function(){
 console.log('Server is running on  Port: ',port);
});
