import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    selectedImage: String,
    uploadDate: {
        type: Date,
        default: new Date(),
    },
})
let ShareImage = mongoose.model('ShareImage', imageSchema);

export default ShareImage;