const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
	cloud_name: 'your cloud name',
	api_key: 'yout api key',
	api_secret: 'your api secret'
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