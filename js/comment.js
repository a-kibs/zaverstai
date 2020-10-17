const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");
let commentField = document.querySelector(".comment-form-text");
let commentAuthor = document.querySelector("#comment-name-input");
let commentMail = document.querySelector("#comment-mail-input");

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    if(!validate()) return;
    let newComment = document.createElement('li');
    newComment.classList.add("comment-item");

    let newCommentImage = document.createElement('img');
    newCommentImage.classList.add("comment-avatar");
    newCommentImage.setAttribute('src', 'img/avatar.jpg');
    newCommentImage.setAttribute('alt', 'Аватар пользователя');
    newCommentImage.setAttribute('height', '50px');
    newCommentImage.setAttribute('width', '50px');
    let newCommentAuthor = document.createElement('p');
    newCommentAuthor.textContent = commentAuthor.value;
    newCommentAuthor.classList.add("comment-author");
    let newCommentMessage = document.createElement('p');
    newCommentMessage.textContent = commentField.value;
    newCommentMessage.classList.add("comment-text");

    newComment.append(newCommentImage, newCommentAuthor, newCommentMessage);
    commentList.append(newComment);
    commentAuthor.value = "";
    commentMail.value = "";
    commentField.value = "";
}