
{
	document.querySelectorAll('[rel="preconnect"]')
			.forEach(rel => rel.remove());
	function getElementByXpath(path) {
		document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.remove();
	}
	try {
		document.querySelectorAll('iframe')
			.forEach(iframe => iframe.remove());

		
		getElementByXpath('//*[@id="block-14"]');
		getElementByXpath('/html/body/script[7]');
		getElementByXpath('/html/body/script[1]');
		getElementByXpath('//*[@id="post-content"]/div[1]/div[1]');
		getElementByXpath('//*[@id="post-content"]/div[1]/center');
	} catch (error) {

	}

	/*document.getElementsByTagName("script")[0].remove();
	document.getElementsByTagName("script")[8].remove();
	console.log(document.getElementsByTagName("script")[1])
	//document.getElementsByTagName("script")[8].remove();*/
	//document.getElementsByTagName("center")[0].remove();



	/*
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