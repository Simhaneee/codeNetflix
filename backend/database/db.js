import mongoose from 'mongoose';



const Connection = async() => {
    const URL = 'mongodb://127.0.0.1:27017/netflixClone'
    
    try {
        await mongoose.connect(URL)
        console.log('Mongodb amazon  connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;