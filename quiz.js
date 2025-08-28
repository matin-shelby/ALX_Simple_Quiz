document.addEventListener('DOMContentLoaded', function () {
    function checkAnswer() {
        const correctAnswer = '4';
        const feedback = document.getElementById('feedback');
        const option = document.querySelector('[name="quiz"]:checked');
        const userAnswer = option.value;
    
        // Compare Answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }
    
        //submit
        document.getElementById('submit-answer').addEventListener('click', checkAnswer);    
})