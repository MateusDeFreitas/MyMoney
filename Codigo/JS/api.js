function regatarDadosParaTabela(simbolo, elementoVariacao, elementoVolume, elementoValor) {
    const chaveApi = '559X65R48XYH6H0G';
    const funcao = 'TIME_SERIES_WEEKLY_ADJUSTED';
    const url = `https://www.alphavantage.co/query?function=${funcao}&symbol=${simbolo}&apikey=${chaveApi}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const series = data['Weekly Adjusted Time Series'];

            if (!series) {
                console.log('Dados indisponíveis ou chave incorreta.');
                return;
            }

            const element = document.getElementById(elementoVariacao);

            const datas = Object.keys(series);
            const ultimaData = datas[0];
            const dadosRecentes = series[ultimaData];

            let variacao = (dadosRecentes['1. open'] - dadosRecentes['4. close']) / dadosRecentes['1. open'];
            let formatado = variacao.toFixed(2);

            document.getElementById(elementoVariacao).textContent = formatado + '%';
            document.getElementById(elementoVolume).textContent = '$' + dadosRecentes['6. volume'];
            document.getElementById(elementoValor).textContent = '$' + dadosRecentes['1. open'];

            if (formatado > 0) {
                element.classList.add('positivo');
                element.classList.remove('negativo');
            } else if (formatado < 0) {
                element.classList.add('negativo');
                element.classList.remove('positivo');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
    });
}

function regatarVariacao(simbolo, elementoVariacao) {
    const chaveApi = 'K3FARVOC8G8NRQ8G';
    const funcao = 'TIME_SERIES_WEEKLY_ADJUSTED';
    const url = `https://www.alphavantage.co/query?function=${funcao}&symbol=${simbolo}&apikey=${chaveApi}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const series = data['Weekly Adjusted Time Series'];

            if (!series) {
                console.log('Dados indisponíveis ou chave incorreta.');
                return;
            }

            const element = document.getElementById(elementoVariacao);

            const datas = Object.keys(series);
            const ultimaData = datas[0];
            const dadosRecentes = series[ultimaData];

            let variacao = (dadosRecentes['1. open'] - dadosRecentes['4. close']) / dadosRecentes['1. open'];
            let formatado = variacao.toFixed(2);

            document.getElementById(elementoVariacao).textContent = formatado + '%';

            if (formatado > 0) {
                element.classList.add('positivo');
                element.classList.remove('negativo');
            } else if (formatado < 0) {
                element.classList.add('negativo');
                element.classList.remove('positivo');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
    });
}

regatarDadosParaTabela('ABEV3.SAO', 'Abev3Variacao', 'Abev3Volume', 'Abev3Valor');
regatarDadosParaTabela('ITUB3.SAO', 'Itub3Variacao', 'Itub3Volume', 'Itub3Valor');
regatarDadosParaTabela('VALE.SAO', 'ValeVariacao', 'ValeVolume', 'ValeValor');
regatarDadosParaTabela('MGLU3.SAO', 'Mglu3Variacao', 'Mglu3Volume', 'Mglu3Valor');
regatarDadosParaTabela('PETR4.SAO', 'Petr4Variacao', 'Petr4Volume', 'Petr4Valor');

regatarVariacao('BBDC4.SAO', 'BBDC4Variacao');
regatarVariacao('BBAS3.SAO', 'BBAS3Variacao');

regatarVariacao('WEGE3.SAO', 'WEGE3Variacao');
regatarVariacao('SUZB3.SAO', 'SUZB3Variacao');

regatarVariacao('AERI3.SAO', 'AERI3Variacao');
regatarVariacao('ARML3.SAO', 'ARML3Variacao');

regatarVariacao('AAPL', 'AAPLVariacao');
regatarVariacao('MSFT', 'MSFTVariacao');

regatarVariacao('AMZN', 'AMZNVariacao');
regatarVariacao('GOOGL', 'GOOGLVariacao');

regatarVariacao('LREN3.SAO', 'LREN3Variacao');
regatarVariacao('NVDA', 'NVDAVariacao');

regatarVariacao('AZUL4.SAO', 'AZUL4Variacao');
regatarVariacao('LCID', 'LCIDVariacao');

regatarVariacao('ISAE4.SAO', 'ISAE4Variacao');
regatarVariacao('JNJ', 'JNJVariacao');

regatarVariacao('TAEE11.SAO', 'TAEE11Variacao');
regatarVariacao('KO', 'KOVariacao');

regatarVariacao('NTCO3.SAO', 'NTCO3Variacao');
regatarVariacao('TSLA', 'TSLAVariacao');