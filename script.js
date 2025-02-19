// Função calcularGlasgow que é chamada quando o botão é clicado
function calcularGlasgow() {
    // Obtém o valor da resposta ocular selecionada no formulário e converte para um número inteiro
    const ocular = parseInt(document.getElementById('ocular').value);

    // Obtém o valor da resposta verbal selecionada no formulário e converte para um número inteiro
    const verbal = parseInt(document.getElementById('verbal').value);

    // Obtém o valor da resposta motora selecionada no formulário e converte para um número inteiro
    const motora = parseInt(document.getElementById('motora').value);

    // Verifica se algum dos valores não é um número (ou seja, se não foi selecionado corretamente)
    if (isNaN(ocular) || isNaN(verbal) || isNaN(motora)) {
        // Exibe um alerta caso algum valor esteja ausente ou incorreto
        alert('Por favor, selecione uma opção para todas as respostas.');
        // Interrompe a execução da função
        return;
    }

    // Calcula a pontuação total somando os valores das respostas ocular, verbal e motora
    const total = ocular + verbal + motora;

    // Variável que armazenará o estado da vítima com base na pontuação total
    let estado;
    // Define a cor de fundo
    let corDeFundo;

    // Verifica se a pontuação total é maior ou igual a 15
    if (total >= 15) {
        // Define o estado como 'Sem déficit neurológico' se a pontuação for maior ou igual a 13
        estado = 'Sem déficit neurológico';
        corDeFundo = 'linear-gradient(to right,rgb(20, 74, 20),rgb(255, 255, 255))'; // Verde
        // Verifica se a pontuação total é maior ou igual a 13
    } else if (total >= 13) {
        // Define o estado como 'Condição Leve' se a pontuação for maior ou igual a 13
        estado = 'Suspeita de lesão cerebral Leve';
        corDeFundo = 'linear-gradient(to right, #8FBC8F,rgb(255, 255, 255))'; // Verde
        // Verifica se a pontuação total está entre 9 e 12 (inclusive)
    } else if (total >= 9) {
        // Define o estado como 'Condição Moderada' se a pontuação for entre 9 e 12
        estado = 'Suspeita de lesão cerebral Moderada';
        corDeFundo = 'linear-gradient(to right, #FFD700,rgb(255, 255, 255))';; // Amarelo
    } else {
        // Define o estado como 'Condição Grave' se a pontuação for menor que 9
        estado = 'Suspeita de lesão cerebral Grave com séria ameaça a vida ';
        corDeFundo = 'linear-gradient(to right, #FF4500,rgb(255, 255, 255))'; // Vermelho
    }

    // Atualiza o conteúdo do elemento com id 'resultado' com a pontuação total e o estado da vítima
    document.getElementById('resultado').innerText = `Pontuação Total: ${total}\nEstado da Vítima: ${estado}`;

    // Altera a cor de fundo da página de acordo com a pontuação
    document.getElementById('body').style.background = corDeFundo;
}
