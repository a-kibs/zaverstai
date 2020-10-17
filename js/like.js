let likeButton = document.querySelector(".like-button");
let isLiked = false;

likeButton.onclick = function() {
    likeButton.classList.toggle("pressed");
    isLiked = !isLiked;
    if(isLiked) {
        likeButton.textContent = parseInt(likeButton.textContent)+1;
    } else {
        likeButton.textContent = parseInt(likeButton.textContent)-1;
    }
}