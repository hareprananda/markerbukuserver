import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const mongoUrl = `mongodb+srv://admin:${process.env.DB_MONGO_PASSWORD}@cluster0.intgb.mongodb.net/markerbuku?retryWrites=true&w=majority`;
export default () => {

    mongoose.connect(mongoUrl,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true
    });
    const connection  = mongoose.connection;
    connection.once("open", () => console.log("Database connection established"));


}