const { db } = require("../config/fireBaseConfig");
const { logger } = require("firebase-functions");

// Controller function to handle POST requests (Create)

const saveUserData = async (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required." });
    }

    logger.info(`Received POST request with name: ${name}, age: ${age}`);

    try {
        const docRef = db.collection("users").doc(); // Generate a new document ID
        await docRef.set({ name, age });

        res.status(200).json({
            message: "Data created successfully!"
        });
    } catch (error) {
        logger.error("Error saving data to Firestore:", error);
        res.status(500).json({ error: "Failed to save data." });
    }
};

// Controller function to handle GET requests (Retrieve)

const getUserData = async (req, res) => {
    try {
        const snapshot = await db.collection("users").get();

        if (snapshot.empty) {
            return res.status(404).json({ error: "No users found." });
        }

        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        res.status(200).json({ users });
    } catch (error) {
        logger.error("Error retrieving data from Firestore:", error);
        res.status(500).json({ error: "Failed to retrieve data." });
    }
};

// Controller function to handle PUT requests (Update)

const updateUserData = async (req, res) => {
    const { id, name, age } = req.body;

    // Check if the ID is provided
    if (!id) {
        return res.status(400).json({ error: "User ID is required for updating." });
    }

    // Check if at least one field to update is provided
    if (!name && !age) {
        return res.status(400).json({ error: "At least one field (name or age) is required to update." });
    }

    try {
        const userRef = db.collection("users").doc(id); // Reference to the document by ID
        const userSnapshot = await userRef.get();

        if (!userSnapshot.exists) {
            return res.status(404).json({ error: "User not found." });
        }

        // Prepare data for update
        const updateData = {};
        if (name) updateData.name = name;
        if (age) updateData.age = age;

        // Perform the update
        await userRef.update(updateData);

        res.status(200).json({
            message: "User data updated successfully!",
        });
    } catch (error) {
        logger.error("Error updating data in Firestore:", error);
        res.status(500).json({ error: "Failed to update data." });
    }
};


// Controller function to handle DELETE requests (Delete)

const deleteUserData = async (req, res) => {
    const { id } = req.body;

    // Check if the ID is provided
    if (!id) {
        return res.status(400).json({ error: "User ID is required for deletion." });
    }

    try {
        const userRef = db.collection("users").doc(id); // Reference to the document by ID
        const userSnapshot = await userRef.get();

        if (!userSnapshot.exists) {
            return res.status(404).json({ error: "User not found." });
        }

        // Delete the user document
        await userRef.delete();

        res.status(200).json({
            message: "User data deleted successfully!",
            id,
        });
    } catch (error) {
        logger.error("Error deleting data from Firestore:", error);
        res.status(500).json({ error: "Failed to delete data." });
    }
};


module.exports = { saveUserData, getUserData, updateUserData, deleteUserData };
