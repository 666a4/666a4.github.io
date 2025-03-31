import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
const seguestRef = ref(database, "/suggestion/");

const suggestion = document.getElementById("suggestion");
const submit = document.getElementById("submit");
const grid = document.getElementById("grid");

function submit_suggestion(){
    const info = JSON.parse(localStorage.getItem("Masscalls student voice login"))
    push(
        seguestRef,
        {
            suggestion: suggestion.value,
            first_name: info["first name"],
            last_name: info["last name"],
            timestamp: `${new Date().toLocaleString('en-GB',{hour12: false})}`,
        }
    );
}

submit.addEventListener("click", submit_suggestion);

onValue(seguestRef, (snapshot) => {
    grid.innerHTML = "";
    const value = snapshot.val();

    console.log(JSON.stringify(value, null, 4));
    for (const key in value) {
        grid.innerHTML += `<div>
        <h2>${value[key].suggestion}<h2>
        <h4>
        ${value[key].first_name} ${value[key].last_name} <br>
        ${value[key].timestamp} <br>
        </h4>
        </div>`;
    } 

});