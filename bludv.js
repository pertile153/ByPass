
{
	window.location.href = document.getElementsByTagName('a')[0];
	window.location.href = document.getElementById('downpart2').getElementsByTagName('a')[0].href;
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