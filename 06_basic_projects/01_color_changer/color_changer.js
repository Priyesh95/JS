let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body')
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    })
})

