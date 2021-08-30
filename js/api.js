//fetch meaning kono ekta jinsih k khuje ba tule niye asha
//bracket er vitore kono ekta website er link dewa.

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//  // .then(json => console.log(json.id))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('users');

    for (const user of data) {
        // console.log(user);
        //console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}, email:${user.email}`;
        ul.appendChild(li);
    }
}
