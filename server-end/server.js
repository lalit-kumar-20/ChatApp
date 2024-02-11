const express = require('express');
const authRoutes = require('./routes/AuthRoutes');
const conversation = require('./routes/MessageRoutes');
const cors = require('cors');



// Connect DB
require('./db');

// Socket.io
require('./Socket/socket');

// app Use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'https://chat-app-op6x.vercel.app' }));

const port = process.env.PORT || 8000;



app.use('/api/auth', authRoutes);
app.use('/api', conversation);


app.listen(port, () => {
    console.log('listening on port ' + port);
})


