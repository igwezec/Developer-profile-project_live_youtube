import profileSchema from "../model/profileModel.js";

// Description: create a new profile
// request | route : POST | "/api/vi/profiles/create_profile"
// access: public

export const createProfile = async (req, res) => {
    console.log(req)
    const { fullName, email, website, about } = req.body;

    try{
        if( !fullName || !email || !website || !about) {
            return res.status(400).json ({
              responseMessage: 
              'Profile creation failed: Please fill all the fields',
            });
        }

        const newProfile = await profileSchema.create({
            fullName, 
            email, 
            website, 
            about,
        });

        return res.status(201)
        .json({ responseMessage: 'profile created successfully', profile: newProfile });
    } catch (error) {
     res.status(500).json({
                responseMessage: 'profile creation faild: request unsuccessful',
                error: error.message,

            });
    }
};

  //Description:Get all profile
    // request | route: Get | '/api/v1/profiles/get-all-profile/:id'
    // access: public


export const getAllProfiles = async (req, res) => {
        try {
            const allProfiles = await profileSchema.find({});

            if (!allProfiles) {
                return res.status(404).json(
                    {
                        responseMessage: "no profiles found:fetch failed",
                    });
            }
            return res.status(200).json(
                {
                    responseMessage: 'profiles fetched successfully',
                    profileCount: allProfiles.length,
                    profiles: allProfiles,
                }
            )

        } catch (error) {
            res.status(500).json({
                responseMessage: 'fetch faild: profiles creaqtion unsuccessful',
                error: error.message,

            });

        }
    };


    //Description:Get a single profile
    // request | route: Get | '/api/v1/profiles/get-all-profile/:id'
    // access: public

export const getProfile = async (req, res) => {
        const {id} = req.params;

        try{
            const profile = await profileSchema.findById({
                _id: id,
            });

            if(!profile) {
                return res.status(404).json({
                    responseMessage: 'profile not found: fetch failed',
                });
            }

            return res.status(200).json({
                responseMessage: 'profile fetched succesfully',
                profile,
            })

        } catch (error) {
            res.status(500).json({
                responseMessage: 'fetch faild: request unsuccesful',
                error: error.message,

            });
        }
    };

        //  Description:update profile
    // request | route: PATCH | '/api/v1/profiles/update-profile/:id'
    // access: public

export const updateProfile = async (req, res) => {
            const { id } = req.params;
            const { fullName, email, website, about } = req.body;

            try{
                if ( !fullName || !email || !website || !about) {
                    return res.status(400).json ({
                        responseMessage:'profile update failed: please fill all the fields',
                    });

                }
                const profileToUpdate = await profileSchema.findById(id);
                if(!profileToUpdate) {
                    return res.status(404).json({
                        responseMessage: 'profile update failed: profile with $(id) not found',
                    });
                }

                const updatedProfile = await profileSchema.findByIdAndUpdate(
                    {_id:id,},
                    req.body,
                     {
                        new: true,
                        runValidators: true,
                    });

                    res.status(200).json({
                        responseMessage: 'profile updated successfully',
                        updatedProfile
                    });

            } catch(error) {
                res.status(500).json({
                responseMessage: 'fetch faild: request unsuccesful',
                error: error.message,

            });

            }
        };

           //  Description:delete profile
           // request | route: DELETE | '/api/v1/profiles/delete-profile/:id'
           // access: public

export const deleteProfile = async (req, res) => {
        const {id} = req.params;

        try {
            const profileToDelete = await profileSchema.findById(id);

            if (!profileToDelete) {
                return res.status(404).json({
                    responseMessage: 'delete failed: profile with ${id} not found',
                });
            }

            const deletedProfile = await profileSchema.findByIdAndRemove({_id:id});

            res.status(200).json({
                
                    responseMessage: 'profile deleted successfully',
                    deletedProfile
                
            })

        } catch (error) {
                res.status(500).json({
                responseMessage: 'fetch faild: request unsuccesful',
                error: error.message,

            });
        }
    };