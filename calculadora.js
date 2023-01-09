function calculadora() {
    const operacao = Number(prompt('Escolha uma operação matemática:\n 1 = Soma(+)\n 2 = Subtração(-)\n 3 = Multiplicação(*)\n 4 = Divisão(/)\n 5 - Divisão inteira(%)\n 6 - Potência(**)'));
    console.log(operacao);

    if(!operacao || operacao<1 || operacao>6){
        alert('Operação Inválida! Tente de novo.');
        calculadora();
    } 
    else{
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let valor;

        if(!n1 || !n2){
            alert('Operadores inválidos! Digite novamente.');
            calculadora();
        }

        else{
            function soma() {
            valor = n1 + n2;
            alert(`${n1} + ${n2} = ${valor}`);
            novaOperacao()
        }

        function subtracao() {
            valor = n1 - n2;
            alert(`${n1} - ${n2} = ${valor}`);
            novaOperacao()
        }

        function multiplicacao() {
            valor = n1 * n2;
            alert(`${n1} * ${n2} = ${valor}`);
            novaOperacao()
        }

        function divisao() {
            valor = n1 / n2;
            alert(`${n1} / ${n2} = ${valor}`);
            novaOperacao()
        }

        function divisaoInteira() {
            valor = n1 % n2;
            alert(`O resto da divisão de ${n1} % ${n2} = ${valor}`);
            novaOperacao()
        }

        function potencia() {
            valor = n1 ** n2;
            alert(`${n1} elevado a ${n2} = ${valor}`);
            novaOperacao()
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');

            if(opcao==1){
                calculadora();
            }
            else if(opcao==2){
                alert('Até mais e obrigada!')
            }
            else{
                alert('Opção inválida, digite novamente.');
                novaOperacao();
            }
        }
    
        }       
    }

    switch(operacao){
        case 1:
            soma();
            break;
        case 2: 
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potencia();
            break;
        default:
            alert('Erro inesperado.');
    }
        
}

calculadora();