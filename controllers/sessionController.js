import Session from "../models/Session.js";

// Create new session
export const createSession = async (req, res) => {
    try {
        const newSession = await Session.create({ ...req.body, userId: req.user.id });
        res.status(201).json(newSession);
    } catch (error) {
        res.status(500).json({ msg: "Error creating session", error });
    }
};

// Get all sessions for user
export const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ userId: req.user.id });
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ msg: "Error fetching sessions", error });
    }
};

// Get single session
export const getSession = async (req, res) => {
    try {
        const session = await Session.findOne({ _id: req.params.id, userId: req.user.id });
        if (!session) return res.status(404).json({ msg: "Session not found" });
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ msg: "Error fetching session", error });
    }
};

// Update session
export const updateSession = async (req, res) => {
    try {
        const session = await Session.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!session) return res.status(404).json({ msg: "Session not found" });
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ msg: "Error updating session", error });
    }
};

// Delete session
export const deleteSession = async (req, res) => {
    try {
        const session = await Session.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!session) return res.status(404).json({ msg: "Session not found" });
        res.status(200).json({ msg: "Session deleted" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting session", error });
    }
};
