importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyA6MsjVjBR0XkiuopGzKmWdEgtJVYV27xc",
    authDomain: "corodvapush.firebaseapp.com",
    databaseURL: "https://corodvapush.firebaseio.com",
    projectId: "corodvapush",
    storageBucket: "corodvapush.appspot.com",
    messagingSenderId: "587525443408",
    appId: "1:587525443408:web:f177650b3c136b59406655",
    measurementId: "G-CYCLKTXCE3"
});
const messaging = firebase.messaging();