const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
	cloud_name: 'janredmann',
	api_key: '944968391431945',
	api_secret: 'kPaxGFvaLqySTuL3Uv7MjUmCx4o'
})

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'movie-uploads',
		allowed_formats: 'jpg, png'
	}
})

const uploader = multer({ storage })

module.exports = { uploader, cloudinary }