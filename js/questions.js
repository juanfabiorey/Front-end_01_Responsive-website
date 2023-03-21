(function() {
    const questionTitles = [...document.querySelectorAll('.questions__title')];
    // console.log(questionTitles);
    questionTitles.forEach(question => {
        question.addEventListener('click', () => {
            // alert('Me has cliqueado')
            let questionHeight = 0;
            let answerText = question.nextElementSibling; // corresponde al párrafo
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answerText.clientHeight === 0) {
                questionHeight = answerText.scrollHeight;
            }

            answerText.style.height = `${questionHeight}px`;
        });
    });
})();
