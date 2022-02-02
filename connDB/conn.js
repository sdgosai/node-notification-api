// Firebase Admin Require
const admin = require('firebase-admin');

// Set path - 'PrivateKey' 
const pathToServiceAccount = ('./path/to/serviceAccountKey.json');
const serviceAccount = (pathToServiceAccount)

// Firebase InitializeApp
const firebase = admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL : 'https://notification-api-53a3a-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

module.exports = firebase;