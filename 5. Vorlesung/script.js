list = document.getElementById('repos-list');
message = document.getElementById('message');

function getRepos(){
    list.innerHTML = '';
    message.innerHTML = '';
    fetch('https://api.github.com/user/repos', {
    headers: {
            'Authorization': 'Bearer ' + document.getElementById('password').value
        }
    })
    .then(response => {
        if (response.status == 200){
            return response.json();
        }
        else{
            return Promise.reject(response);
        }
    })
    .then(data => {
        data.forEach(element => {
            listElement = document.createElement("li");
            elementName = document.createTextNode(element.name);
            listElement.appendChild(elementName);
            list.appendChild(listElement);
        })
    })
    .catch(error => error.json().then(err => message.innerHTML = err.message));
}