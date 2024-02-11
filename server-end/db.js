const mongoose = require('mongoose');

const url = `mongodb+srv://wizardlalit007:fxcAUUmj4dS748bv@cluster0.m5vd6qo.mongodb.net/?retryWrites=true&w=majority`
;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))