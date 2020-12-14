import ShareImage from "../models/shareImage.js";

const getImages = async (req,res) => {
    try {
        const images = await ShareImage.find();
                
        res.status(200).send(images);
    } catch (error) {
        res.status(404).json({ ERR: error });
    }
}

export const uploadImage = async (req,res) => {
    const image = req.body;
    const newImage = new ShareImage(image);
    try {
         await newImage.save();
        
       res.status(201).send(newImage);
    } catch (error) {
        res.status(409).json({ERR: error})
    }
}

export const deleteAllImg = async (req,res) => {
    try {
        await ShareImage.deleteMany({});
        res.status(201).json([]);
    } catch (error) {
        res.status(409).json({ERR: error});
    }
}

export default getImages