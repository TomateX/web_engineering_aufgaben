import { Octokit } from "octokit";

const message = document.getElementById('message');
const list = document.getElementById('repos-list');
const octokit = new Octokit();

async function getRepos() {
  list.innerHTML = '';
  message.innerHTML = '';

  try {
    const response = await octokit.request('GET /user/repos', {
      headers: {
        authorization: `Bearer ${password}`
      }
    });

    if (response.status === 200) {
      const data = response.data;
      data.forEach(element => {
        const listElement = document.createElement('li');
        const elementName = document.createTextNode(element.name);
        listElement.appendChild(elementName);
        list.appendChild(listElement);
      });
    } else {
      throw new Error(response);
    }
  } catch (error) {
    const err = await error.json();
    message.innerHTML = err.message;
  }
}
