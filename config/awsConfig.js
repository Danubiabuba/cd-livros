// config.js
require('dotenv').config();

module.exports = {
    awsConfig: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    },
    s3BucketName: process.env.S3_BUCKET_NAME
};
