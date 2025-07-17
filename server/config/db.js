import mongoose from "mongoose";
const connectDB =  async () => {
    try{
            await mongoose.connect(process.env.MONGO_URL )
            console.log(`MONGODB connected successfully`); // log message for successful connection
    }
    catch(error){
        console.log(`Error connecting MONGODB: ${error}`);
    }
};

export default connectDB;   