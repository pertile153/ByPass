{
  /* Expressão regular para capturar o link magnet*/
  const magnet = document.getElementById("link").href;
  close();
  const newWindow = window.open(magnet);
  if (newWindow) {
    // Aguardar um pouco para garantir que a nova janela foi carregada
    setTimeout(() => {
      // Fechar a nova janela após um pequeno atraso
      newWindow.close();
    }, 5000); // 5000 milissegundos = 5 segundos
  }
}
