const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Gangareddy:Reddy12@cluster0.hjhorxm.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
// require('./db');
