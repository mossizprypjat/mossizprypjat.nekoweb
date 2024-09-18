const fs = require('fs');

function loadPosts() {
    const posts = fs.readFileSync('posts.json', 'utf8');
    const jsonPosts = JSON.parse(posts);
    console.log(jsonPosts);
    return jsonPosts;
}

function getUserId(Posts, username) {
    const user = Posts.users.find(user => user.username === username);
    if (user) {
        return user.id;
    } else {
        console.log(Posts.users[-1]);
        const userId = Posts.users.length > 0 ? Posts.users[Posts.users.length - 1].id + 1 : 1;
        Posts.users.push({
            id: userId,
            username: username
        });
        fs.writeFileSync('posts.json', JSON.stringify(Posts, null, 2));

        return userId;
    }
}

function post(Posts) {
    const text = $('#post-input');
    const username = $('#username');
    const userId = getUserId(username);
    const postId = Posts.posts.length > 0 ? Posts.posts[Posts.posts.length - 1].id + 1 : 1;
    Posts.posts.push({
        id: postId,
        user_id: userId,
        text: text,
    });

    fs.writeFileSync('posts.json', JSON.stringify(Posts, null, 2));
}

function generateFeed(posts) {
    posts.forEach((post) => {
        console.log(post);
        document.getElementById("feed").innerHTML += `
                               <div class="post">
                                   <div class="message">
                                       <p><strong>${post.user_id}</strong></p>
                                       <p>${post.text}</p>
                                   </div>
                               </div>
                               `;
    });
}


$(document).ready(function () {
    const Posts = loadPosts();

    generateFeed(Posts.posts);

    // Click event for the button
    $('#post-button').click(post);

    // Keypress event for the input field
    $(document).keypress(function (event) {
        // Check if the pressed key is Enter
        if (event.keyCode === 13) {
            post();
        }
    });
});
