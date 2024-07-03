import express from 'express';
import uploadMiddleware from '../common/multer.js';
import sovloModel from '../model/sovlo.js';

const router = express.Router();

router.get('/images' , async(req,res)=>{
       try {
            
            let allImages= await sovloModel.find({});

               res.status(200).send({
                   message:"ALL Images fetched sucessfully",
                    allImages
               });

       } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
       }
})


router.post('/upload', uploadMiddleware.single('image'), async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).send({ message: "No file uploaded" });
        }

        const sovloImage = req.file.filename;
           console.log(sovloImage);
        const data = await sovloModel.create({sovloImage});
         console.log(data);
        res.status(201).send({
            message: "Image uploaded successfully",
            data
        });
       
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
});

export default router;
