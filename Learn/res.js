function postDiscussion() {
  const postTextarea = document.getElementById('postTextarea');
  const discussionPosts = document.getElementById('discussionPosts');

  const newPost = document.createElement('div');
  newPost.className = 'discussionPost';
  newPost.textContent = postTextarea.value;

  discussionPosts.appendChild(newPost);

  postTextarea.value = '';
}
