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

document.addEventListener("DOMContentLoaded", () => {
    const first_name = document.getElementById("first-name");
    const last_name = document.getElementById("last-name");
    const email = document.getElementById("email-inp");

    const submit = document.getElementById("submit");

    function submit_login(){
        const login_info = {
            "first name": first_name.value, 
            "last name": last_name.value, 
            "email": email.value,
        };

        if (login_info["email"] === "" 
            || login_info["first name"] === "" 
            || login_info["last name"] === ""){
                return 0;
        };

        localStorage.setItem("Masscalls student voice login", JSON.stringify(login_info))

        push(
            ref(database, "/users/"),
            {
                first_name: login_info["first name"],
                last_name: login_info["last name"],
                email: login_info["email"],
                timestamp: `${new Date().toLocaleString('en-GB',{hour12: false})}`,
            }
        );

        setTimeout(next_page, 2000);
    };

    function next_page(){
        location.href = "./main.html"
    }

    submit.addEventListener("click", submit_login);

    if (localStorage.getItem("Masscalls student voice login") !== null){
        const login_info = JSON.parse(localStorage.getItem("Masscalls student voce login"));
        first_name.value = login_info["first name"];
        last_name.value = login_info["last name"];
        email.value = login_info["email"];
    };
});