// Get UI handle and Github communication interface
const UI = require('./ui');
const Github = require('./github');

// Retrieve config properties
const { client_id, client_secret } = require('./config.json');

// Main code
const github = new Github(client_id, client_secret);
const ui = new UI();

// Capture user name from search box
const userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#textSearch").value;
  if(userName !== "") {
    console.log(`Searching username ${userName}...`);
    github.fetchUser(userName)
      .then(data => {
        if(data.userData.message === "Not Found") {
          ui.showMessage("User not found :(", "alert alert-danger col-md-12 mt-2");
        } else {
          ui.clearMessage();
          ui.showProfile(data.userData);
          ui.showRepositories(data.repositories);
        }
      });

  } else {
    console.error("You have to enter something in the search box!");
  }
});
