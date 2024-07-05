/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  // service: "gmail",
  auth: {
    user: 'enteremail@gmail.com',
    pass: 'enter password here',
  },
});

exports.sendMail = functions.firestore
  .document('sendEmail/{id}')
  .onCreate((snap, context) => {
    console.log('email id -->', snap.data().emailToSend);
    let message = 'Hello,<br><br>' + snap.data().message;

    const mailOptions = {
      from: 'temp@gmail.com',
      to: snap.data().emailToSend,
      subject: snap.data().subject,
      html: message,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log('inside error block', error);
      } else {
        console.log('email send', data);
      }
    });
  });

// exports.onUserAssessmentCreated = functions.firestore
// .document('userAssessments/{userAssessmentId}')
// .onCreate(async (snapshot, context) => {
//     const newData = snapshot.data();
//     const userEmail = newData.email;

//     console.log('A new user assessment was created:', newData);

//     const userFootprintRef = admin.firestore().collection('userFootprint').doc(userEmail);

//     const userFootprintSnapshot = await userFootprintRef.get();
//     const previousData = userFootprintSnapshot.data();

//     console.log('previousData', previousData)

//     const data = {
//         email: userEmail,
//         updatedAt : newData?.updatedAt,
//         homePoints: (previousData?.homePoints || 0) + newData?.homePoints,
//         transportPoints:  (previousData?.transportPoints || 0) + newData?.transportPoints,
//         shoppingPoints:  (previousData?.shoppingPoints || 0) + newData?.shoppingPoints,
//         foodPoints:  (previousData?.foodPoints || 0) + newData?.foodPoints,
//         totalPoints: (previousData?.totalPoints || 0) + newData?.totalPoints,
//     }
//     return userFootprintRef.set(data);

// });

// firebase init functions
// firebase login
//   firebase deploy --only functions
