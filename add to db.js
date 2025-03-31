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

const event_name = document.getElementById("event-name");
const where = document.getElementById("where");
const when = document.getElementById("when");
const who = document.getElementById("who");
const submit = document.getElementById("submit");

function submit_to_db(){
    console.log(event_name)
    push(
        ref(database, "/activities/"),
        {
            event_name: event_name.value,
            where: where.value,
            when: when.value,
            who: who.value,
        }
    );

    event_name.value = "";
    where.value = "";
    when.value = "";
    who.value = "";
};

submit.addEventListener("click", submit_to_db);
