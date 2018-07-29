class Github {

  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async fetchUser(user) {
    const userDataRequest = await fetch(
      `http://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const repositoryRequest = await fetch(
      `http://api.github.com/users/${user}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const repositories = await repositoryRequest.json();
    const userData = await userDataRequest.json();
    return {
      userData,
      repositories
    };
  }
}

module.exports = Github;
