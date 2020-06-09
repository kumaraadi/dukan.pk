import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: 5000,
  MONGODB_URL: 'mongodb://localhost/dukan',
  JWT_SECRET:'somethingsecret',
  PAYPAL_CLIENT_ID: 'sb',
};
