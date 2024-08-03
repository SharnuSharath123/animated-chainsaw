// script.js
document.addEventListener('DOMContentLoaded', () => {
    const blade = document.querySelector('.blade');
    
    document.body.addEventListener('click', () => {
        if (blade.style.animationPlayState === 'paused') {
            blade.style.animationPlayState = 'running';
        } else {
            blade.style.animationPlayState = 'paused';
        }
    });
});
