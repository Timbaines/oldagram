// IMPORT DATA FROM POSTS.JS FILE
import { postsArr } from './js/posts.js';

// AVOID CROSS SITE SCRIPTING ATTACKS
function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// FUNCTION TO CALL AND RENDER EACH POST
function updatePost(post) {

    const postContainer = document.getElementById('section-container');
    // POST TEMPLATE STRING
    const postTemplate = `
        <div class="user-info">
            <img src="${escape(post.avatar)}" alt="User Avatar Image">
            <div>
                <h2>${escape(post.name)}</h2>
                <p>${escape(post.location)}</p>
            </div>
        </div>
        <div class="post-image">
            <img src="${escape(post.post)}" alt="Post Image" />
        </div>
        <div class="post-content">
            <div class="meta-container">
               <button class="btn btn-like"><i class="fa-regular fa-heart"></i></button>
               <button class="btn btn-comment"><i class="fa-regular fa-comment"></i></button>
               <button class="btn btn-share"><i class="fa-regular fa-paper-plane"></i></button>
            </div>
            <div id="post-like"><h3>${escape(post.likes)} Likes</h3></div>
            <div class="post-comment"><p><strong>${escape(post.username)}</strong>${escape(post.comment)}</p></div>
        </div>
    `;

    // RENDER POST CONTENT TO HTML STRUCTURE
    postContainer.innerHTML += postTemplate;
}

// LOOPS THROUGH AND UPDATES UI FOR NEW POSTS
postsArr.forEach(post => {
    updatePost(post);
});