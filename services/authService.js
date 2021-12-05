const jwt = require('jsonwebtoken');
const fs = require('fs');

// const privateKey = fs.readFileSync('./keys/private.pem');
// const publicKey = fs.readFileSync('./keys/public.pem');

const signOptions = { expiresIn: '7 days', algorithm: 'RS256' };

const createToken = (payload) => {
  return jwt.sign(payload, process.env.PRIVATE_KEY, signOptions);
};
const decodeToken = (token) => {
  return jwt.verify(token, process.env.PRIVATE_KEY);
};

module.exports = { createToken, decodeToken };
