const Small = document.querySelectorAll('.FAQ_S');
FAQ_S.forEach(item => {
    const Question = item.querySelector('.question');
    const Answer = item.querySelector('.answer');
    question.addEventListener('click', () => {
        Small.forEach(el => {
            if (el !== item) {
                el.querySelector('.answer').classList.remove('show');
            }
        });
        Answer.classList.toggle('show');
    });
});
