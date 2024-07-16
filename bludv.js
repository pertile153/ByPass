{
  /* Expressão regular para capturar o link magnet*/
  const magnet = document.getElementsByName("link")[0].value;
  close();
  const newWindow = window.open(magnet);
  if (newWindow) {
    // Aguardar um pouco para garantir que a nova janela foi carregada
    setTimeout(() => {
      // Fechar a nova janela após um pequeno atraso
      newWindow.close();
    }, 5000); // 5000 milissegundos = 5 segundos
  }
  /*Códigos antigos abaixo
  window.location.href = document.getElementsByTagName("a")[0];
  window.location.href = document
    .getElementById("downpart2")
    .getElementsByTagName("a")[0].href;
  
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		alert("aq2");
		if (changeInfo.status == 'complete' && myURLs.some(url => tab.url.includes(url))) {
			const tabId = tab.id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ['getLinks.js']
			});

		}
	});*/
}
