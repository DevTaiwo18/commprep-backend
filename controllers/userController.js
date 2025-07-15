import User from "../models/User.js";

// Get user profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ msg: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: "Error fetching profile", error });
    }
};

// Update user profile
export const updateProfile = async (req, res) => {
    try {
        const { fullName, preferences, profilePicture } = req.body;

        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: "User not found" });

        if (fullName) user.fullName = fullName;
        if (preferences) user.preferences = preferences;
        if (profilePicture) user.profilePicture = profilePicture;

        await user.save();

        res.status(200).json({ msg: "Profile updated", user });
    } catch (error) {
        res.status(500).json({ msg: "Error updating profile", error });
    }
};
