import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbFeOTCiuwzWlRR5mt1vA7b0MUZPx9Lpk",
    authDomain: "unit-21-test.firebaseapp.com",
    databaseURL: "https://unit-21-test-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "unit-21-test",
    storageBucket: "unit-21-test.firebasestorage.app",
    messagingSenderId: "506761929803",
    appId: "1:506761929803:web:38f1a3823064b616ddd9ce"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const activitiesRef = ref(database, "/activities/");

const grid = document.getElementById("grid");

onValue(activitiesRef, (snapshot) => {
    grid.innerHTML = "";
    const value = snapshot.val();

    console.log(JSON.stringify(value, null, 4));
    for (const key in value) {
        grid.innerHTML += `<div>
        <h2>${value[key].event_name}<h2>
        <h4>
        ${value[key].where} <br>
        ${value[key].when} <br>
        ${value[key].who}
        </h4>
        </div>`;
    } 

});