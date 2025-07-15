import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["interview", "presentation", "meeting"],
        required: true,
    },
    title: {
        type: String,
    },
    context: {
        type: Object,
    },
    questions: {
        type: Array,
        default: [],
    },
    answers: {
        type: Array,
        default: [],
    },
    feedback: {
        type: Array,
        default: [],
    },
    score: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    completedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Session", sessionSchema);
