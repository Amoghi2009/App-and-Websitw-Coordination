var firebaseConfig = {
    apiKey: "AIzaSyAEf4WFzzZRVLCJi6h6X6sGo1SM9-uadSM",
    authDomain: "app-and-web-cordination.firebaseapp.com",
    databaseURL: "https://app-and-web-cordination-default-rtdb.firebaseio.com",
    projectId: "app-and-web-cordination",
    storageBucket: "app-and-web-cordination.appspot.com",
    messagingSenderId: "979781459696",
    appId: "1:979781459696:web:a8804fd623bc13f144ac35",
    measurementId: "G-RYZRSBMKPK"
};

firebase.initializeApp(firebaseConfig);

var app = firebase.database().getItem("App_on_or_off");
document.getElementById("on_or_off").value = app;