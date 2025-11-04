"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromCloudinary = exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = (fileBuffer, folder = "uploads", resourceType = "auto") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.v2.uploader.upload_stream({
            resource_type: resourceType,
            folder,
        }, (error, result) => {
            if (error || !result)
                return reject(error);
            resolve({
                url: result.secure_url,
                public_id: result.public_id,
            });
        });
        stream.end(fileBuffer);
    });
};
exports.uploadToCloudinary = uploadToCloudinary;
const deleteFromCloudinary = async (publicId) => {
    try {
        await cloudinary_1.v2.uploader.destroy(publicId, { resource_type: "auto" });
    }
    catch (error) {
        console.error("Cloudinary deletion error:", error);
        throw new Error("Failed to delete file from Cloudinary");
    }
};
exports.deleteFromCloudinary = deleteFromCloudinary;
exports.default = cloudinary_1.v2;
