const estacaoTexto = document.getElementById('estacao');
const imagem = document.getElementById('imagem');
const selectMes = document.getElementById('mes');

selectMes.addEventListener('change', () => {
  const mes = parseInt(selectMes.value);
  let estacao = '';
  let imagemSrc = '';

  if ([12, 1, 2].includes(mes)) {
    estacao = 'Verão';
    imagemSrc = 'verao.jpeg';
  } else if ([3, 4, 5].includes(mes)) {
    estacao = 'Outono';
    imagemSrc = 'outono.jpg';
  } else if ([6, 7, 8].includes(mes)) {
    estacao = 'Inverno';
    imagemSrc = 'inverno.jpg';
  } else if ([9, 10, 11].includes(mes)) {
    estacao = 'Primavera';
    imagemSrc = 'primavera.jpeg';
  } else {
    estacao = '';
    imagemSrc = '';
  }

  estacaoTexto.textContent = estacao ? `Estação: ${estacao}` : '';
  imagem.src = imagemSrc;
});