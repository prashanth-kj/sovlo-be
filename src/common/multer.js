import multer from 'multer';
import path from 'path';

// Define storage settings for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public'); // Set the destination directory for uploads
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname +'-' + uniqueSuffix+ '-'+ path.extname(file.originalname)); // Construct a unique file name
    }
});

// Define file type validation
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/; // Allowed file extensions
    const mimetype = fileTypes.test(file.mimetype); // Validate MIME type
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); // Validate extension

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only images are allowed')); // Reject unsupported file types
    }
};

// Configure the Multer instance
const upload = multer({
    storage: storage,
    // limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit to 5MB
    fileFilter: fileFilter
});

export default upload;
