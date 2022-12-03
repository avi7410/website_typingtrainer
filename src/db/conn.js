const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://avi_vyas_7410:7410@cluster0.vyl4u9q.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
// require('./db');
