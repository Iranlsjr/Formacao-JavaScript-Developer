const USER = {
  login: String,
  name: String,
  bio: String,
  avatar_url: String,
  public_repos: Number,
  followers: Number,
  following: Number,
  repos: Array,
};
const QUERY = document.querySelector(".query");

async function getUser() {
  getRepos();
  //Requisição
  const URL = `https://api.github.com/users/${QUERY.value}`;
  const DATA = await fetch(URL);
  //Salvar requisição
  const USER_DATA = await DATA.json();

  if (USER_DATA.message === "Not Found") {
    alert("User not found");
    return;
  }
  USER.login = USER_DATA.login;
  USER.name = USER_DATA.name;

  USER.bio = USER_DATA.bio;
  USER.avatar_url = USER_DATA.avatar_url;
  USER.public_repos = USER_DATA.public_repos;
  USER.followers = USER_DATA.followers;
  USER.following = USER_DATA.following;

  getAllData();
}

async function getRepos() {
  const URL = `https://api.github.com/users/${QUERY.value}/repos`;
  const DATA = await fetch(URL);
  const REPOS = await DATA.json();

  USER.repos = REPOS;
}

function getAllData() {
  const USER_INFO = document.getElementById("user-info");

  USER_INFO.setAttribute("style", "display:block;");

  USER_INFO.innerHTML = `
    <div class="user-info">
        <div class="user-avatar">
          <h2 class="user-name">
            ${USER.name == null ? (USER.name = "No username") : USER.name}
          </h2>
          <h3 class="user-login">${USER.login}</h3>
          <img src="${USER.avatar_url}" alt="${USER.login}" class="avatar-img"/>
          <p class="bio">${USER.bio}</p>
        </div>
<div class="user-stats">
<h2>Info</h2>
<p>Repos:</p>${USER.public_repos}</div>
<p>Followers:</p>${USER.followers}</div>
<p>Following:</p>${USER.following}</div>

      </div>
      ${USER.repos.map(
        (repo) => `<div  class="repo">
        <h3 class="repo-name">${repo.name}</h3>
        <p class="repo-description">"${repo.description}</p>
        <p class="repo-language">${repo.language}</p>
        <div class="repo-stats">
        <span>${repo.stargazers_count}</span>
        </div>
        </div>`
      )}
  `;
}
