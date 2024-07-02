

function calcular() {
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    let res = document.getElementById("res");
    let resultado = document.getElementById("resultado")
    let subtitulo = document.getElementById("subtitulo")
    let n1 = Number(altura.value);
    let n2 = Number(peso.value);
    var imc = n2 / (n1 * n1);
    res.innerHTML = `${imc.toFixed(2)}`;
    res.style.textTransform = "uppercase";

    if (imc < 18.5) {
        res.style.color = '#870085'
        resultado.style.color = '#870085'
        resultado.innerHTML = 'Abaixo do peso!'
        subtitulo.innerHTML = "Atenção! Seu IMC está abaixo do recomendado. Procure orientação médica para garantir sua saúde e bem-estar."

    } else if (imc >= 18.5 && imc <= 24.9) {
        res.style.color = '#117f09'
        resultado.innerHTML = 'Peso normal!'
        resultado.style.color = "#117f09"
        subtitulo.innerHTML = "Parabéns! Você está com o IMC dentro da faixa normal. Continue mantendo um estilo de vida saudável!"

    } else if (imc >= 25 && imc <= 29.9) {
        res.style.color = '#ffbe00'
        resultado.innerHTML = 'Sobrepeso'
        resultado.style.color = '#ffbe00'
        subtitulo.innerHTML = "Cuidado! Seu IMC indica sobrepeso. Considere ajustar sua dieta e rotina de exercícios para melhorar sua saúde."

    } else {
        res.style.color = '#f00000'
        resultado.innerHTML = 'Obesidade'
        resultado.style.color = '#f00000'
        subtitulo.innerHTML = "Atenção! Seu IMC está na faixa da obesidade. É importante buscar orientação médica para desenvolver um plano de ação voltado para a sua saúde."
    }
}

