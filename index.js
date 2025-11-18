document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        console.log("Please fill in all fields.");
        return;
    }

    if (username === "admin" && password === "1234") {
        console.log("Login successful!");
    } else {
        console.log("Incorrect username or password.");
    }
});
