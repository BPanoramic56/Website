let intro = document.querySelector('.intro-div');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', ()=>{ // All contents within this block will trigger whenever the page is loaded
    setTimeout(() => {
        logoSpan.forEach((span, idx) =>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() =>{
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            }) 
        }, 2000);

        setTimeout(() =>{
            intro.style.top = '-100vh';
        }, 2300);
    })
});

document.querySelectorAll('.ChartDiv').forEach(box => {
    let hideTimeout;

    box.addEventListener('mouseover', () => {
        hideTimeout = setTimeout(() => {
            document.querySelectorAll('.ChartDiv').forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.add('hidden');
                }
            });
        }, 1000); // 500ms delay before hiding other divs
    });

    box.addEventListener('mouseout', () => {
        clearTimeout(hideTimeout);
        document.querySelectorAll('.ChartDiv').forEach(otherBox => {
            otherBox.classList.remove('hidden');
        });
    });
});
