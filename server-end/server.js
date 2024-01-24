const express = require('express');
const authRoutes = require('./routes/AuthRoutes');
const conversation = require('./routes/MessageRoutes');
const cors = require('cors');



// // const io = require('socket.io')(8080, {
// //     cors: {
// //         origin: 'http://localhost:3002',
// //     }
// // });



// Connect DB
require('./db');

// app Use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Welcome');
})
app.use('/api/auth', authRoutes);
app.use('/api', conversation);


app.listen(port, () => {
    console.log('listening on port ' + port);
})