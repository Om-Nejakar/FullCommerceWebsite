const mongoose = require('mongoose');

async function test() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Bacola');
        console.log('Connected to MongoDB');
        
        const TestSchema = new mongoose.Schema({
            name: String,
            email: String,
            password: String
        }, { collection: 'registers' });
        
        const TestModel = mongoose.model('TestUser', TestSchema);
        
        const testUser = new TestModel({
            name: "Direct Test",
            email: "direct@test.com",
            password: "password123"
        });
        
        console.log('Attempting to save...');
        const saved = await testUser.save();
        console.log('Saved successfully:', saved);
        
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

test();
