const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

const background = document.querySelector('.background');

password.addEventListener('input', (e) => {
    const strength = e.target.value.length;
    background.style.transition = 'filter 1s ease-in'
    background.style.filter = `blur(${20 - (strength * 4) }px)`;

});