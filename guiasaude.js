
{
	if(document.getElementsByTagName('a').length>0){
		window.location.href = document.getElementsByTagName('a')[1];
	}
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