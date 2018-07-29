class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    // this.repositories = document.querySelector("#profile");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card mt-2 animated bounceInLeft">
        <img src="${user.avatar_url}" class=card-img-top/>
        <div class="card-body">
          <h3 class="card-title">
            ${user.name} / ${user.login}
          </h3>
          <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View profile</a>
          <span class="badge badge-success">
            Followers: ${user.followers}
          </span>
          <span class="badge badge-primary">
            Following: ${user.following}
          </span>
          <span class="badge badge-warning">
            Company: ${user.company}
          </span>
          <span class="badge badge-info">
            Blog: ${user.blog}
          </span>
        </div>
      </div>
    `;
  }

  showRepositories(repositories) {
    console.log(repositories);
    let template;
    repositories.forEach(repo => {
      template += `
        <div class="card card-body mt-2 animated bounceInUp">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">

            </div>
          </div>
        </div>
      `;
    });
    const repository = document.querySelector("#repositories");
    repository.innerHTML = template;
  }

  showMessage(msg, cssClass) {
    this.clearMessage();
    const divMsg = document.createElement("div");
    divMsg.className = cssClass;
    divMsg.appendChild(document.createTextNode(msg));

    const content = document.querySelector(".row");
    const profile = document.querySelector("#profile");
    content.insertBefore(divMsg, profile)
  }


  clearMessage() {
    const alertFound = document.querySelector(".alert");
    if(alertFound) {
      alertFound.remove();
    }
  }
}


module.exports = UI;
