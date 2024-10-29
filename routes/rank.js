const router=require('express').Router();
const verify=require('./verifyToken');
const User=require('../model/User');
// router.post('/get',verify,async (req,res)=>{
//     const user=await User.findOne({_id:req.user._id});
//     res.json({success:true,rank:user.rank})
// })
router.post('/get', verify, async (req, res) => {
    console.log('Entered /get route'); // Log entry to route

    try {
        console.log('Looking up user with ID:', req.user._id);
        const user = await User.findOne({ _id: req.user._id });
        
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ success: false, msg: 'User not found' });
        }

        console.log('User found:', user);
        console.log('User rank:', user.rank);

        res.json({ success: true, rank: user.rank });
    } catch (error) {
        console.error('Error in /get route:', error);
        res.status(500).json({ success: false, msg: 'Error retrieving rank' });
    }
});

// router.post('/',verify,async(req,res)=>{
//     const user=await User.findOne({_id:req.user._id})
//     var rank=user.rank
//     await User.findByIdAndUpdate(req.user._id,{"rank":rank+1},function(err,result){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send({success:true,rank:rank+1});
//         }
//     })
// })

router.post('/', verify, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        const newRank = user.rank + 1;
        console.log(`Current user rank: ${user.rank}`);
        console.log(`Updating rank to: ${newRank}`);

        // Update the user's rank without a callback
        await User.findByIdAndUpdate(req.user._id, { rank: newRank });

        res.json({ success: true, rank: newRank });
    } catch (err) {
        console.error("Error in /rank route:", err);
        res.status(500).json({ success: false, msg: "Failed to update rank" });
    }
});


// router.post('/', verify, async (req, res) => {
//     console.log('Entered /rank increment route'); // Log entry to route

//     try {
//         console.log('Looking up user with ID:', req.user._id);
//         const user = await User.findOne({ _id: req.user._id });
        
//         if (!user) {
//             console.log('User not found');
//             return res.status(404).json({ success: false, msg: 'User not found' });
//         }

//         // Log the current rank before incrementing
//         console.log('Current user rank:', user.rank);
//         const newRank = (user.rank || 0) + 1; // Default to 0 if rank is undefined

//         // Attempt to update user rank
//         console.log('Updating rank to:', newRank);
//         await User.findByIdAndUpdate(req.user._id, { rank: newRank }, function (err, result) {
//             if (err) {
//                 console.error('Error updating rank:', err);
//                 res.status(500).json({ success: false, msg: 'Error updating rank' });
//             } else {
//                 console.log('Rank update successful:', result);
//                 res.json({ success: true, rank: newRank });
//             }
//         });
//     } catch (error) {
//         console.error('Error in /rank route:', error);
//         res.status(500).json({ success: false, msg: 'Error updating rank' });
//     }
// });

module.exports=router;