import express from 'express';

import {
    createProfile, 
    getAllProfiles, 
    getProfile, 
    updateProfile, 
    deleteProfile,
} from '../controllers/profile.js';


const router = express.Router();

router.post("/create-profile", createProfile);
router.get("/get-all-profile", getAllProfiles);
router.get("/get-profile/:id", getProfile);
router.put("/update-profile/:id", updateProfile);
router.delete("/delete-profile/:id", deleteProfile);

export default router