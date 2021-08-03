import mongoose from 'mongoose'

const dogSchema = mongoose.Schema({
    dogName: String,
    author: String,
    hobbies: [String],
    imgFile: String,
    totalLikes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Submission = mongoose.model('submission', dogSchema)

export default Submission