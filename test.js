'use strict';

/* global $, jQuery */

function createContainer() {
    const container = document.createElement('div');
    container.className = 'comment-list';
    document.querySelector('body').appendChild(container);
}

function solution() {
    // fetch('https://www.example.com/comments?count=10')
    // .then(response => response.json()) 
    // .then(json => {
        
    // })
    let json = [{
        "id": 123,
        "username": "User 1",
        "message": "Cool product!"
    }, {
        "id": 456,
        "username": "User 2",
        "message": "Didn't like it that much"
    }]
    const container = document.querySelector('.comment-list');
    const text = document.createTextNode('Loading... ');
    container.appendChild(text);
    json.forEach(el => {
        const comment = document.createElement('div');
        comment.className = 'comment-item';
        const user = document.createElement('div');
        user.textContent = el.username;
        user.className = 'comment-item__username';
        const msg = document.createElement('div');
        msg.textContent = el.message;
        msg.className = 'comment-item__message';

        comment.appendChild(user);
        comment.appendChild(msg);

        if(container.childNodes[container.childElementCount-1] && container.childNodes[container.childElementCount-1].textContent === 'Loading... ')
        container.replaceChild(comment, container.childNodes[container.childElementCount-1]);
        else
        container.appendChild(comment);
    })
}

createContainer();
setTimeout(() => {
    solution();
}, 1000)

