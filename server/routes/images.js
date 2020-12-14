import express from 'express';

import getImages from '../controllers/getImages.js';
import {uploadImage, deleteAllImg} from '../controllers/getImages.js';
const router = express.Router();

router.get('/', getImages);
router.post('/', uploadImage);
router.delete('/clearAll', deleteAllImg);
export default router;