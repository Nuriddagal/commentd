let form = document.querySelector('.comment-form');
let input = document.querySelector('.inputteg')
let button = document.querySelector('.comment__button');
let caseCom = document.querySelector('.comment__case');
form.onsubmit = function(evt) {
    evt.preventDefault();
    let comment = document.createElement('li');
    comment.classList.add('user-comment');
    comment.textContent = input.value;
    caseCom.append(comment);
    input.value = '';
}