const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = process.env.MONGO_URI;
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected!!");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;