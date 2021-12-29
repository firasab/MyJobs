const express = require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
const path = require('path');
const passport=require('passport')
const workerRoutes = require('./routes/worker.js');
const jobRoutes = require('./routes/job.js');

const app = express();



app.use(bodyParser.urlencoded({ limit: "20mb", extended:true }));
app.use(bodyParser.json({ limit: "20mb", extended:true }));

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

require('./config/passport')(passport);


const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


const users = require('./routes/api/users');
app.use('/api/users', users);
app.use('/workers', workerRoutes);
app.use('/jobs', jobRoutes);



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})


app.use(cors());