document.getElementById("meuForm").addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("msg").value;

    // verificação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exemplo de validação de email simples
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    alert("Enviado com sucesso!");
});








// quiz

function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound () {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz() {
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;

    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;

let correctAnswers = {
        q1: "A",
        q2: "B",
        q3: "A",
        q4: "C",
        q5: "B",
        q6: "B",
        q7: "D",
        q8: "A",
        q9: "C",
        q10: "D",
//adicione as respostas corretas para outras perguntas
    };

    

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    //tocar respostas quado estiverem certas
    if(score === 10) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    }else{
        let badSound = document.getElementById('perdeusom');
        badSound.play();
        }
    }

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}
